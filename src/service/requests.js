export {login, signUp, datosServidor};

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHZlb2pib253bGNvdHlyd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2NjM0NDAsImV4cCI6MTk4MzIzOTQ0MH0.ZelMGqBQ5ceMuXW10fxXKFhy_Lro0objadlBknAvk3s";
let access_token = '';
const headers = {
    "apiKey": SUPABASE_KEY,
    "Content-Type": "application/json",
};
const getHeaders = {
    "apiKey": SUPABASE_KEY,
    "Authorization": "Bearer " + access_token,
}

async function request(url, method, headers, body){
    let response = await fetch(url,{
        method,
        headers,
        body: JSON.stringify(body)
    });
    let data = await response.json();
    return data;
}

async function login(email, password){
    let url = 'https://ivxveojbonwlcotyrwnq.supabase.co/auth/v1/token?grant_type=password';
    let data = await request(url, 'post', headers, {email, password});
    access_token = SUPABASE_KEY;
    return data;
}

async function signUp(email, password){
    let url = 'https://ivxveojbonwlcotyrwnq.supabase.co/auth/v1/signup';
    let data = await request(url, 'post', headers, {email, password});
    return data;
}

async  function datosServidor(){
    let url = 'https://ivxveojbonwlcotyrwnq.supabase.co/rest/v1/Prueba';
    let data = await request(url, 'get', getHeaders)
    return data;
}