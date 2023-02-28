import { getLibroById } from '../service/requests';

export { bookInfo }

import image from '../assets/img/castillos_de_fuego.jpg';
import image2 from '../assets/img/el_cuco_de_cristal.jpg';
import image3 from '../assets/img/el_tablero_de_la_reina.jpg';
import image4 from '../assets/img/esperando_al_diluvio.jpg';
import image5 from '../assets/img/hijos_de_la_fabula.jpg';
import image6 from '../assets/img/historias_de_mujeres_casadas.jpg';
import image7 from '../assets/img/la_maldicion_de_hill_house.jpg';
import image8 from '../assets/img/nosotros.jpg';


function bookInfo(){
    let infoBook = document.createElement('div');
    infoBook.classList += "infoLibro";
    
    let id = localStorage.getItem('id');

    getLibroById('libros', id, localStorage.getItem('access_token')).then(data => {
        

        infoBook.innerHTML = `
            <img src="assets/img/${data[0].imagen_libro}" style="width: 300px; heigth: 400px">
            <div>
                <h1><b>${data[0].Nombre}</b></h1>
                <p>ISBN: ${data[0]['ISBN']}</p>
                <p>Autor: ${data[0].Autor}</p>
                <p>Tematica: ${data[0].Tematica}</p>
                <p>Descripcion: ${data[0].Descripcion}</p>
                <p>Paginas: ${data[0].Paginas}</p>
                <p>Editorial: ${data[0].Editorial}</p>
            </div>
        `;

        return data;
    });
    

    return infoBook;
    
}