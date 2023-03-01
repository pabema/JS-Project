import { getCartas, getData } from "../service/requests.js";
import { cardLibro, libroTop } from "./libroTop.js";

export { topTemplate }

function topTemplate(){
    let topTemplate = document.createElement("div");
    let libros = document.createElement("div");
    libros.classList += "libros-top";

    if(localStorage.getItem('access_token')){
        
        topTemplate.id = 'about';
        topTemplate.innerHTML = 
        `
        <h1>Top 10 libros más vendidos</h1>
        
        `;
        
        getData('books', localStorage.getItem('access_token')).
        then(d => {
            console.log(d);
            for (let g of d) {
                libros.append(libroTop(g));
            }
        });
        topTemplate.appendChild(libros);
    }else{
        topTemplate.innerHTML = 
        ``;
    }
    return topTemplate;
    
}

