import { getData } from "../service/requests.js";

import { libroTop } from "./libroTop.js";

import image from '../assets/img/castillos_de_fuego.jpg';
import image2 from '../assets/img/el_cuco_de_cristal.jpg';
import image3 from '../assets/img/el_tablero_de_la_reina.jpg';
import image4 from '../assets/img/esperando_al_diluvio.jpg';
import image5 from '../assets/img/hijos_de_la_fabula.jpg';
import image6 from '../assets/img/historias_de_mujeres_casadas.jpg';
import image7 from '../assets/img/la_maldicion_de_hill_house.jpg';
import image8 from '../assets/img/nosotros.jpg';
import image9 from '../assets/img/el_poder_de_las_palabras.jpg';

export { home }

function home(){
  let homeTemplate = document.createElement("div");
  let libros = document.createElement("div");
  libros.classList += "libros";
  let navLibros = document.createElement('div');
  navLibros.classList += "navLibros";

  if(localStorage.getItem('access_token')){
    
      
      homeTemplate.id = 'home';
      homeTemplate.innerHTML = 
      `
      <h1>Libros populares</h1>
      
      `;
      
      getData('libros', localStorage.getItem('access_token')).then(d => {
          console.log(d);

          let page = 0;
          let items = 8;

        loadItems();
        
          
          function loadItems() {
            libros.innerHTML = "";

            for(let i = page*items; i<(page*items)+items; i++){
                if(!d) { break }

                const item = document.createElement('div');
                item.innerHTML = `
                    <img src="assets/img/${d[i].imagen_libro}" style="width: 200px; heigth: 300px">
                    <h4>${d[i].Nombre}</h4>
                    <p>${d[i].Autor}</p>
                `;

                libros.append(item);
            }

            homeTemplate.append(navLibros);
            loadPageNav();
            

          }

          function loadPageNav() {
            navLibros.innerHTML = "";

            for(let i = 0; i < (d.length/items); i++){
                const span = document.createElement('span');

                span.innerHTML = 
                `
                <button class="boton_nav">${i+1}</button>
                `;
                

                span.addEventListener('click', (e) => {

                    page = e.target.innerHTML-1;
                    loadItems();
                     
                });

                
                navLibros.append(span);
            }
        }
          
      });
      
      homeTemplate.append(libros);
      
  }else{
      homeTemplate.innerHTML = 
      ``;
  }
  return homeTemplate;
}