import { datosServidor } from "../service/requests.js";

export { dataTemplate, generateHome }

const token = localStorage.getItem("access_token");

function dataTemplate(dato){

    let dataDiv = document.createElement("div");
    dataDiv.innerHTML += 
    `
    <div class="container">${dato.datos}</div>
    `;

return dataDiv;

}

function generateHome(){

    let homeTemplate = document.createElement("div");
    homeTemplate.id = 'home';
    homeTemplate.innerHTML = 
    `
    <h1>Welcome!!</h1>
    `;



return homeTemplate;

}

window.addEventListener('hashchange', () => {
    if(window.location.hash == '#/' && token != "undefined"){
        datosServidor().then(serverData => {
    
            //console.log(datos);
        
            let contenedor = document.querySelector("#container");
            console.log(contenedor);
        
            let cervesa = serverData.map(dato => {
                console.log(dato.datos);
                contenedor.append(dataTemplate(dato));            
            })
        
            contenedor.append(cervesa);
        
        })
    }
    
})
    

    


