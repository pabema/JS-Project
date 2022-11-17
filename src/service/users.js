import { login, signUp } from "./requests.js";

export {loginUser, registerUser, logout};

async function loginUser(email, password){
    login(email, password).then(dataLogin=>{
        localStorage.setItem("access_token", dataLogin.access_token);
        localStorage.setItem("user", email);
        console.log("login");
        console.log(localStorage);
    });
}

function registerUser(email, password){
    signUp(email,password).then(dataRegister=>{
        console.log(dataRegister);
    });
}

function logout(){
    localStorage.removeItem('access_token');
    console.log("logout");
    console.log(localStorage);
}