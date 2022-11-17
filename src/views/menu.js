import { logout } from "../service/users.js";

export { menuTemplate }

function menuTemplate(){

let navMenu = document.createElement("div");
navMenu.id = 'header';
navMenu.innerHTML = 
`
<nav class="navbar navbar-dark navbar-expand-lg bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#">PornHub</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/contact">Contact</a>
      </li>
      <li class="nav-item" id="login">
        
      </li>
    </ul>
    <ul class="navbar-nav">
      <form class="d-flex text-light">
        <li class="nav-item" id="user">
          
        </li>
        <li class="nav-item" id="logout">
          
        </li>
      </form>
    </ul>
  </div>
</div>
</nav>
`;


let logoutBtn = navMenu.querySelector("#logout");
let loginBtn = navMenu.querySelector("#login");
let user = navMenu.querySelector('#user');

if(localStorage.getItem("access_token") != null){
  logoutBtn.innerHTML = `<a class="nav-link" href="#/">Logout</a>`;
  loginBtn.innerHTML = "";
  user.innerHTML = `<a class="nav-link">${localStorage.getItem('user')}</a>`;
}else{
  logoutBtn.innerHTML = "";
  loginBtn.innerHTML = `<a class="nav-link" href="#/login">Login</a>`;
  user.innerHTML = "";
}

logoutBtn.addEventListener('click', ()=>{
  location.reload();
  logout();
  localStorage.removeItem('user');
})

return navMenu;

}