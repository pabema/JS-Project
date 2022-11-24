// Import custom CSS
import './scss/styles.scss'
import './scss/style.css'

import { route } from "./router.js";
import { menuTemplate } from "./views/menu.js";
import { footerTemplate } from './views/footer.js';

import * as bootstrap from 'bootstrap'


(() => {

    document.addEventListener("DOMContentLoaded", () => {

        let main = document.querySelector('#main');

        let header = document.createElement('div');
        header.classList.add('header');
        header.id = 'header';

        header.append(menuTemplate());
        main.append(header);

        let contenedor = document.createElement('div');
        contenedor.classList.add('container');
        contenedor.id = 'container';

        main.append(contenedor);

        let footer = document.createElement('div');
        footer.classList.add('footer');
        footer.id = 'footer';

        footer.append(footerTemplate());
        main.append(footer);
        
        window.location.hash = '#/';

        route(window.location.hash);

        window.addEventListener('hashchange', () => {
            route(window.location.hash);
            header.innerHTML = "";
            header.append(menuTemplate());
        
        })

    })

})();