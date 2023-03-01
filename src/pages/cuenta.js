export { cuentaTemplate }

function cuentaTemplate(){
    let cuentaTemplate = document.createElement("div");
    cuentaTemplate.classList += 'cuenta';

    if(localStorage.getItem('access_token')){

        let datosCuenta = localStorage.getItem('userData');
        let usuario = JSON.parse(datosCuenta);
        console.log(datosCuenta);

        let buttonModificar = document.createElement('button');
        buttonModificar.classList += "modificar";

        buttonModificar.innerHTML = `Editar Perfil`;
        
        cuentaTemplate.id = 'cuenta';
        cuentaTemplate.innerHTML = 
        `
       
            <h1>Informacion de la cuenta</h1>
            <div class="cuentaDiv">
            <img src="${usuario['img_profile']}">
            <div class="infoCuenta">
                <h2>Nombre: ${usuario['username']}</h2>
                <h3>Email: ${usuario['email']}</h3>
            </div>
        </div>
        
        
        `;

        buttonModificar.addEventListener('click', () => {
            window.location.hash = "#/modificarPerfil";
        })

        cuentaTemplate.append(buttonModificar);
    }else{
        cuentaTemplate.innerHTML = 
        ``;
    }
    return cuentaTemplate;
    
}