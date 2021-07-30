
import { renderNav } from "./nav_bar";
import{foot} from "./footer"
import { middle } from "./homepage";
import { menu } from "./menu";



const $content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;

}


function home() {
    
    $content.innerHTML = " "
    renderNav();
    middle();
    foot();
  }


  function main_menu() {
    
    $content.innerHTML = " "
    renderNav();
    menu()
    foot();
  }

  home()
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "HOME") home();
    if (target === "MENU" )main_menu();
  });


export { createHtmlElement, $content };