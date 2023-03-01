import { registerUser } from "../service/users.js";

export { signUpForm }

function signUpForm(){

let signUpTemplate = document.createElement("div");
signUpTemplate.di = 'signUp';
signUpTemplate.innerHTML = 
`
<br>
<section class="">
  <div class="mask d-flex align-items-center gradient-custom-3">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center text-white">
              <h2 class="fw-bold mb-2 text-uppercase text-white">Create an account</h2>

              <form>

                <div class="form-outline form-white mb-4">
                  <input type="text" id="username" class="form-control form-control-lg" />
                  <label class="form-label" for="username">Your Name</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input type="email" id="email" class="form-control form-control-lg" />
                  <label class="form-label" for="email">Your Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input type="password" id="password" class="form-control form-control-lg" />
                  <label class="form-label" for="password">Password</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button id="signUpBtn" class="btn btn-outline-light btn-lg px-5">Register</button>
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

signUpTemplate.querySelector('#signUpBtn').addEventListener('click', async ()=>{
  let username = signUpTemplate.querySelector('#username').value;
  let email = signUpTemplate.querySelector('#email').value;
  let password = signUpTemplate.querySelector('#password').value;
  let datos = {
    "email": email,
    "password": password,
    data:{
      "username": username,
      "email": email,
      "img_profile": "https://ivxveojbonwlcotyrwnq.supabase.co/storage/v1/object/public/avatars/default.png"
    }
  }
  let dataSignUp = await registerUser(datos);
  console.log(dataSignUp);
})

return signUpTemplate;

}