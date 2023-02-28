export {loginSupabase, signUpSupabase, getData, logoutSupabase, getLibroById};

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHZlb2pib253bGNvdHlyd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2NjM0NDAsImV4cCI6MTk4MzIzOTQ0MH0.ZelMGqBQ5ceMuXW10fxXKFhy_Lro0objadlBknAvk3s";
const urlBase = "https://ivxveojbonwlcotyrwnq.supabase.co";
const headers = {
    "apiKey": SUPABASE_KEY,
    "Content-Type": "application/json",
};



///////////
////////// Per a les peticions normals a dades de la base de dades 
//////////
async function supaRequest(url,method,headers,body){
    let response = await fetch(url,{
        method,
        headers,
        body: JSON.stringify(body)  // En cas d'enviar dades per post, put patch... 
    });
    if(response.status >=200 && response.status <=300){ // En cas d'error en el servidor
        if(response.headers.get("content-type")){ // Si retorna un JSON
            return await response.json();
        }
        return {}; // Si no contesta res no té content-type i cal retornar un objecte buit per a ser coherent en l'eixida.
    }
    else{
        return Promise.reject(await response.json()); // En cas de problemes en el servidor retornen un reject. 
    }
}

async function request(url,method,headers,body){
    let response = await fetch(url,{
        method,
        headers,
        body  // En cas d'enviar dades per post, put patch... 
    });
    return response;
}


async function loginSupabase(email, password){
    let url = `${urlBase}/auth/v1/token?grant_type=password`;
    let data = await supaRequest(url,'post',headers,{ email, password });
    return data;
}

async function signUpSupabase(email, password){
    let url = `${urlBase}/auth/v1/signup`;
    let data = await supaRequest(url,'post',headers,{ email, password });
    return data;
}


async function logoutSupabase(token){
    let url = `${urlBase}/auth/v1/logout`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token};
    let data = await supaRequest(url,'post',headersAux,{});
    return data;
}

async function getData(URI,token){
    let url = `${urlBase}/rest/v1/${URI}`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token, "Range": "0-8"};
    let data = await supaRequest(url,'get',headersAux);
    return data;
}

async function getLibroById(URI, id, token){
    let url = `${urlBase}/rest/v1/${URI}?id=eq.${id}&select=*`;
    let headersAux = {...headers, "Authorization": "Bearer "+token};
    let data = await supaRequest(url, 'get', headersAux);
    return data;
}
