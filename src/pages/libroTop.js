export { libroTop }


function libroTop(libro){
    let libroTop = document.createElement("div");
    libroTop.classList.add('libroTop');

    let buttonLibro = document.createElement("button");

    buttonLibro.innerHTML = "Mas info";
    buttonLibro.classList += "button_libro_top";

    buttonLibro.addEventListener("click", () => {
        console.log("click");
        window.location.hash = `#/book`;
        localStorage.setItem('id', libro.id);
    });

  
    libroTop.innerHTML = ` 
        <img src="${libro.imagen_libro}" style="width: 200px; heigth: 300px">
        <div>
            <h4>${libro.Nombre}</h4>
            <p><b>Autor:</b> ${libro.Autor}</p>
            <p><b>Sinopsis:</b> ${libro.Descripcion}</p>
        </div>
        <div></div>
    `;
    libroTop.appendChild(buttonLibro);

    return libroTop;
}