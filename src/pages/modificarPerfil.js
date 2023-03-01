import { updateUser } from "../service/users.js";
import { supabase } from "../service/requests.js";
export { modificarPerfil }

function modificarPerfil(){

let datos = localStorage.getItem('userData');
let user = JSON.parse(datos);






let modificarPerfil = document.createElement("div");
modificarPerfil.di = 'signUp';
modificarPerfil.innerHTML = 
`
<br>
<section class="">
  <div class="mask d-flex align-items-center gradient-custom-3">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center text-white">
              <h2 class="fw-bold mb-2 text-uppercase text-white">Modifica tu perfil</h2>

              <form>

                <div class="form-outline form-white mb-4">
                  <input type="text" id="username" class="form-control form-control-lg" value="${user['username']}"/>
                  <label class="form-label" for="username">Nombre</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input type="email" id="email" class="form-control form-control-lg" value="${user['email']}"/>
                  <label class="form-label" for="email">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input type="file" id="Foto" Foto de perfil="form-control form-control-lg"/>
                  <label class="form-label" for="Foto">Foto de perfil</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button id="signUpBtn" class="btn btn-outline-light btn-lg px-5">Modificar</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

modificarPerfil.querySelector('#signUpBtn').addEventListener('click', async (e)=>{
  e.preventDefault();
  let username = modificarPerfil.querySelector('#username').value;
  let email = modificarPerfil.querySelector('#email').value;
  let img = modificarPerfil.querySelector('input[type=file]').files[0];

  const avatarFile = img
  const { data, error } = await supabase
    .storage
    .from('avatars')
    .upload(img['name'], avatarFile, {
      cacheControl: '3600',
      upsert: false
  });
  console.log(img);
  let datos = {
    "email": email,
    data:{
      "username": username,
      "email": email,
      "img_profile": `https://ivxveojbonwlcotyrwnq.supabase.co/storage/v1/object/public/avatars/${img['name']}`
    }
  }
  let dataModificacion = await updateUser(datos, localStorage.getItem('access_token'));
  console.log(dataModificacion);

  window.location.hash = "#/cuenta";
})

return modificarPerfil;

}