
import menu from "../templates/menu.json";
import menuCardTemplates from '../templates/menu-list.hbs';


/* console.log(menuCardTemplates(menu)); */
const containerMenues = document.querySelector('.js-menu');

function createMenuesGallary(menu) {
    return menuCardTemplates(menu);
}
containerMenues.insertAdjacentHTML('beforeend', createMenuesGallary(menu));







  

