export { libroTop }

import image from '../assets/img/castillos_de_fuego.jpg';
import image2 from '../assets/img/el_cuco_de_cristal.jpg';
import image3 from '../assets/img/el_tablero_de_la_reina.jpg';
import image4 from '../assets/img/esperando_al_diluvio.jpg';
import image5 from '../assets/img/hijos_de_la_fabula.jpg';
import image6 from '../assets/img/historias_de_mujeres_casadas.jpg';
import image7 from '../assets/img/la_maldicion_de_hill_house.jpg';
import image8 from '../assets/img/nosotros.jpg';




function libroTop(libro){
    let libroTop = document.createElement("div");
    libroTop.classList.add('libroTop');

    let buttonLibro = document.createElement("button");

    buttonLibro.innerHTML = "Mas info";

    buttonLibro.addEventListener("click", () => {
        console.log("click");
        window.location.hash = `#/book`;
        localStorage.setItem('id', libro.id);
    });

  
    libroTop.innerHTML = ` 
        <img src="assets/img/${libro.imagen_libro}" style="width: 200px; heigth: 300px">
        <div>
            <h4>${libro.Nombre}</h4>
            <p><b>Autor:</b> ${libro.Autor}</p>
            <p><b>Sinopsis:</b> ${libro.Descripcion}</p>
        </div>
    `;
    libroTop.appendChild(buttonLibro);

    return libroTop;
}