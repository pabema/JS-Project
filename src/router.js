import { home } from "./pages/home.js";
import { loginForm } from "./pages/login.js";
import { aboutTemplate } from "./pages/about.js";
import { signUpForm } from "./pages/signUp.js";
import { contactTemplate } from "./pages/contact.js";
import { bookInfo } from "./pages/bookInfo.js";

export {route};

function route(ruta){

    //const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHZlb2pib253bGNvdHlyd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2NjM0NDAsImV4cCI6MTk4MzIzOTQ0MH0.ZelMGqBQ5ceMuXW10fxXKFhy_Lro0objadlBknAvk3s";
    const token = localStorage.getItem("access_token");

    console.log(ruta);

    let body = document.querySelector('#container');
    
    switch(ruta){
        case '#/':
            body.innerHTML = "";
            body.append(home());
            break;
        case '#/login':
            body.innerHTML = '';
            body.append(loginForm());
            break;
        case '#/about':
            body.innerHTML = '';
            body.append(aboutTemplate());
            break;
        case '#/signUp':
            body.innerHTML = '';
            body.append(signUpForm());
            break;
        case '#/contact':
            body.innerHTML = '';
            body.append(contactTemplate);
            break;
        case '#/book':
                body.innerHTML = '';
                body.append(bookInfo());
                break;
        case "": {
            window.location.hash = "#/";
            break;
        }
    }

}