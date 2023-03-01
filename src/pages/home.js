import { getData, searchProducts, getLibrosInicio } from "../service/requests.js";

import { libroTop } from "./libroTop.js";

import { libroGeneral } from "./libroGeneral.js";

export { home }

function home(){
  let homeTemplate = document.createElement("div");
  homeTemplate.classList += "home";
  let libros = document.createElement("div");
  libros.classList += "libros";
  let navLibros = document.createElement('div');
  navLibros.classList += "navLibros";
  let buscador = document.createElement('input');
  buscador.classList += "buscador form-control";
  buscador.placeholder = "ej. La maldicion de hill house";

  if(localStorage.getItem('access_token')){
    
      
      homeTemplate.id = 'home';
      homeTemplate.innerHTML = 
      `
      <h1>Libros populares</h1>
      
      `;

      function buscarLibros(filtro){
        searchProducts('libros', filtro, localStorage.getItem('access_token')).then(d => {
          for (let g of d) {
            libros.append(libroGeneral(g));
        }
          console.log(d);
        })
      }

      buscador.addEventListener('input', () => {
        buscarLibros(buscador.value);
        libros.innerHTML = "";
      })

      homeTemplate.appendChild(buscador);
      
      getLibrosInicio('random_books', localStorage.getItem('access_token')).then(d => {
          console.log(d);

          let page = 0;
          let items = 8;

        loadItems();
        
          
          function loadItems() {
            libros.innerHTML = "";

            for(let i = page*items; i<(page*items)+items; i++){
                if(!d) { break }

                const item = document.createElement('div');
                item.classList+="divLibro";
                item.innerHTML = `
                    <img src="${d[i].imagen_libro}" style="width: 200px; heigth: 300px">
                    <h4>${d[i].Nombre}</h4>
                    <p>${d[i].Autor}</p>
                `;

                item.addEventListener('click', () => {
                  window.location.hash = `#/book`;
                  localStorage.setItem('id', d[i].id);

                })

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