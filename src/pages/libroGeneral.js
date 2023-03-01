export { libroGeneral }



function libroGeneral(libro){
    let divLibro = document.createElement("div");
    divLibro.classList += ('divLibro');

    divLibro.innerHTML = ` 
        <img src="${libro.imagen_libro}" style="width: 200px; heigth: 300px">
        <div>
            <h4>${libro.Nombre}</h4>
            <p><b>Autor:</b> ${libro.Autor}</p>
        </div>
    `;
   

    return divLibro;
}