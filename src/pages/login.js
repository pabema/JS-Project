import { loginUser } from "../service/users.js";

export { loginForm }

function loginForm(){ 



let loginTemplate = document.createElement("div");


loginTemplate.id = 'login';
loginTemplate.innerHTML = 
`
<form>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-30">
    <div class="row d-flex justify-content-center align-items-center h-80">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="email">Email</label>
                <input type="email" id="email" class="form-control form-control-lg" />
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="password">Password</label>
                <input type="password" id="password" class="form-control form-control-lg" value=""/>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" id="loginBtn" type="submit">Login</button>
            </div>
            <div>
              <p class="mb-0">Don't have an account? <a href="#/signUp" class="text-white-50 fw-bold">Sign Up</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
`;

loginTemplate.querySelector('#loginBtn').addEventListener('click', async ()=>{
  let email = loginTemplate.querySelector('#email').value;
  let password = loginTemplate.querySelector('#password').value;
  loginUser(email, password).then(status => {
    if(status.success){
      window.location.hash = '#/';
    }else{
      console.log('error');
    }
  })
  
});

return loginTemplate;

}