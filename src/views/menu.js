import { isLogged, logout } from "../service/users.js";

export { menuTemplate }

function menuTemplate(){

let navMenu = document.createElement("div");
navMenu.id = 'header';

let data = localStorage.getItem('userData');
let user = JSON.parse(data);
navMenu.innerHTML = 
`
<nav id="header" class="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Booker</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/about">Top 10</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/contact">Contact</a>
      </li>
      ${!isLogged() ? 
        `<li class="nav-item" id="login">
          <a class="nav-link" href="#/login">Login</a>
        </li>` 
        : 
        ``
      }
    </ul>
    <ul class="navbar-nav">
      <form class="d-flex text-light">
      ${!isLogged() ? 
        `` 
        : 
        `<li class="nav-item" id="logout">
          <a class="nav-link" href="#/">Logout</a>
        </li>
        <li class="nav-item">
          <img src="${user['profile_img']}" class="avatar">
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/cuenta">${user['username']}</a>
        </li>`
      }
      </form>
    </ul>
  </div>
</div>
</nav>
`;


let logoutBtn = navMenu.querySelector("#logout");

if(logoutBtn){
  logoutBtn.addEventListener('click', ()=>{
    logout();
    localStorage.clear();
    window.location.hash = "#/login";
  })
}


return navMenu;

}