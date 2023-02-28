import { getCartas, getData } from "../service/requests.js";
import { cardLibro, libroTop } from "./libroTop.js";

export { aboutTemplate }

function aboutTemplate(){
    let aboutTemplate = document.createElement("div");
    let libros = document.createElement("div");
    libros.classList += "libros-top";

    if(localStorage.getItem('access_token')){
        
        aboutTemplate.id = 'about';
        aboutTemplate.innerHTML = 
        `
        <h1>Top 10 libros mas vendidos</h1>
        
        `;
        
        getData('libros', localStorage.getItem('access_token')).
        then(d => {
            console.log(d);
            for (let g of d) {
                libros.append(libroTop(g));
            }
        });
        aboutTemplate.appendChild(libros);
    }else{
        aboutTemplate.innerHTML = 
        ``;
    }
    return aboutTemplate;
    
}

