import { loginSupabase, logoutSupabase, signUpSupabase, getData } from "./requests.js";

export {loginUser, registerUser, logout, isLogged};

async function loginUser(email, password){
    let status = { success: false }
    try {
        let dataLogin = await loginSupabase(email, password);
        console.log(dataLogin);
        localStorage.setItem("access_token", dataLogin.access_token);
        status.success = true;
    }catch(err){
        console.log(err);
        status.success = false;
    }
    return status;
    
}

function isLogged(){
    if(localStorage.getItem("access_token")){
        return true;
    }
    return false;
}

function registerUser(email, password){
    let status = { success: false };
    try{
        signUpSupabase(email,password).then(dataRegister=>{
            console.log(dataRegister);
            status.success = true;
        });
    } catch(err) {
        console.log(err);
        status.success = false;
    }
    return status;
}

function logout(){
    localStorage.removeItem('access_token');
    logoutSupabase(localStorage.getItem('access_token')).then(data => {
        console.log(data);
        
    })
}