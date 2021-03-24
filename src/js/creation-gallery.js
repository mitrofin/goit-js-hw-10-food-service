import menuList from "../templates/menu.json";
import menuCardTemplate from "../templates/menuList.hbs";

const containerMenu = document.querySelector(".js-menu");

const createMenuGallery = (menu) =>  menuCardTemplate(menu)
;

console.log(createMenuGallery(menuList));

containerMenu.insertAdjacentHTML("beforeend", createMenuGallery(menuList));