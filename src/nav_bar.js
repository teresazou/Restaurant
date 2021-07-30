import { $content, createHtmlElement } from "./index";

function render() {
    const $shopname=document.createElement('div')
    $shopname.setAttribute('id','shopname');
    $shopname.textContent="Next Door Coffee"

    const navItems = ["home", "menu", "about"];
    const $ul = document.createElement("ul");
    
    navItems.forEach((item) =>
      $ul.appendChild(createHtmlElement("li", null, null, item))
    );
    
    const $nav = document.createElement("nav");

    $nav.appendChild($shopname);
    $nav.appendChild($ul);
    
    
    
    $content.appendChild($nav);
  }
  
  export { render as renderNav };

