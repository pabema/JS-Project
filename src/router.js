import { generateHome } from "./pages/home.js";
import { loginForm } from "./pages/login.js";
import { aboutTemplate } from "./pages/about.js";
import { signUpForm } from "./pages/signUp.js";
import { contactTemplate } from "./pages/contact.js";

export {route};

function route(ruta){

    //const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHZlb2pib253bGNvdHlyd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2NjM0NDAsImV4cCI6MTk4MzIzOTQ0MH0.ZelMGqBQ5ceMuXW10fxXKFhy_Lro0objadlBknAvk3s";
    const token = localStorage.getItem("access_token");

    console.log(ruta);

    let body = document.querySelector('#container');
    
    switch(ruta){
        case('#/'):
            body.innerHTML = '';
            console.log(localStorage.getItem("access_token"));
            if(token != null && token != undefined){
                body.append(generateHome());
            }
            break;
        case('#/login'):
            body.innerHTML = '';
            body.append(loginForm());
            break;
        case('#/about'):
            body.innerHTML = '';
            if(token != null && token != undefined){
                body.append(aboutTemplate);
            }
            break;
        case('#/signUp'):
            body.innerHTML = '';
            body.append(signUpForm());
            break;
        case('#/contact'):
            body.innerHTML = '';
            if(token != null && token != undefined){
                body.append(contactTemplate);
            }
            break;
    }

}