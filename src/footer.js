import { $content, createHtmlElement } from "./index";


function foot() {
    const copyright = "@2021 Teresa Zou All rights reserved";
    const $p=document.createElement('p');
    $p.appendChild(createHtmlElement("p", null, null, copyright))

    const $footer = document.createElement("footer");
    $footer.appendChild($p);
    
    $content.appendChild($footer);
  }

export{foot}