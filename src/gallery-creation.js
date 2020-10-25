
import menu from "./menu.json";
import menuCardTemplates from '../src/templates/menu-list';


/* console.log(menuCardTemplates(menu)); */
const containerMenues = document.querySelector('.js-menu');

function createMenuesGallary(menu) {
    return menuCardTemplates(menu);
}
containerMenues.insertAdjacentHTML('beforeend', createMenuesGallary(menu));







  

