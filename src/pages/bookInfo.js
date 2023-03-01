import { getLibroById } from '../service/requests';

export { bookInfo }



function bookInfo(){
    let infoBook = document.createElement('div');
    infoBook.classList += "infoLibro";
    
    let id = localStorage.getItem('id');
    let buttonLink = document.createElement('button');
    buttonLink.innerHTML = `Link de compra`;
    buttonLink.classList += "boton_comprar";

    

    getLibroById('libros', id, localStorage.getItem('access_token')).then(data => {
        
        buttonLink.addEventListener('click', () => {
            window.location = `${data[0].link}`;
        })

        infoBook.innerHTML = `
            <img src="${data[0].imagen_libro}" style="width: 300px; heigth: 400px">
            <div class="info_libro">
                <h1><b>${data[0].Nombre}</b></h1>
                <p>ISBN: ${data[0]['ISBN']}</p>
                <p>Autor: ${data[0].Autor}</p>
                <p>Tematica: ${data[0].Tematica}</p>
                <p>Descripcion: ${data[0].Descripcion}</p>
                <p>Paginas: ${data[0].Paginas}</p>
                <p>Editorial: ${data[0].Editorial}</p>

                
            </div>
        `;
        let infoLibro = document.querySelector('.info_libro');
        infoLibro.appendChild(buttonLink);

        return data;
    });
    

    return infoBook;
    
}