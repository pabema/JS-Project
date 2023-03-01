export {loginSupabase, signUpSupabase, getData, logoutSupabase, getLibroById, searchProducts, getLibrosInicio, contactEmail, modificarUsuario, supabase};

import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHZlb2pib253bGNvdHlyd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2NjM0NDAsImV4cCI6MTk4MzIzOTQ0MH0.ZelMGqBQ5ceMuXW10fxXKFhy_Lro0objadlBknAvk3s";
const urlBase = "https://ivxveojbonwlcotyrwnq.supabase.co";
const headers = {
    "apiKey": SUPABASE_KEY,
    "Content-Type": "application/json",
};




async function supaRequest(url,method,headers,body){
    let response = await fetch(url,{
        method,
        headers,
        body: JSON.stringify(body)  
    });
    if(response.status >=200 && response.status <=300){ 
        if(response.headers.get("content-type")){ 
            return await response.json();
        }
        return {}; 
    }
    else{
        return Promise.reject(await response.json()); 
    }
}

const supabase = createClient(urlBase, SUPABASE_KEY, {
    schema: 'custom',
    persistSession: false,
  })



async function loginSupabase(email, password){
    let url = `${urlBase}/auth/v1/token?grant_type=password`;
    let data = await supaRequest(url,'post',headers,{ email, password });
    return data;
}

async function signUpSupabase(datos){
    let url = `${urlBase}/auth/v1/signup`;
    let data = await supaRequest(url,'post',headers,datos);
    return data;
}


async function logoutSupabase(token){
    let url = `${urlBase}/auth/v1/logout`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token};
    let data = await supaRequest(url,'post',headersAux,{});
    return data;
}

async function getLibrosInicio(URI,token){
    let url = `${urlBase}/rest/v1/${URI}`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token};
    let data = await supaRequest(url,'get',headersAux);
    return data;
}

async function getData(URI,token){
    let url = `${urlBase}/rest/v1/${URI}`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token, "Range": "0-9"};
    let data = await supaRequest(url,'get',headersAux);
    return data;
}

async function getLibroById(URI, id, token){
    let url = `${urlBase}/rest/v1/${URI}?id=eq.${id}&select=*`;
    let headersAux = {...headers, "Authorization": "Bearer "+token};
    let data = await supaRequest(url, 'get', headersAux);
    return data;
}

async function searchProducts(URI, filtre, token){
    let url = `${urlBase}/rest/v1/${URI}?Nombre=like.%25${filtre}%25&select=*`;
    let headersAux = {...headers, "Authorization": "Bearer "+token}
    let data = await supaRequest(url, 'get', headersAux);
    return data;
}

async function contactEmail(data, token){
    let url = `${urlBase}/rest/v1/contacto`;
    let headersAux = {...headers, "Authorization": "Bearer "+token, "Prefer": "return=representation"}
    let datos = await supaRequest(url, 'post', headersAux, data);
    return datos;
}


async function modificarUsuario(data, token){
    let url = `${urlBase}/auth/v1/user`;
    let headersAux = {...headers, "Authorization": "Bearer "+token}
    let datos = await supaRequest(url, 'put', headersAux, data);
    return datos;
}
