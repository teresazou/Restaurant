import { $content, createHtmlElement } from "./index";

function middle() {
    const $main=document.createElement('div')
    $main.setAttribute('id','main');
   
    var $img=document.createElement('img');
    $img.src="https://www.coffeeaddress.com/file/manual/CA_Home_Coffee_in_cafe@2x.png";
    
    var $title=document.createElement('div');
    $title.setAttribute('id', 'title');
    $title.appendChild(createHtmlElement("div", "title", null, "Try It Once,"))
    $title.appendChild(createHtmlElement("div", "title_2", null, "And ,"))
    $title.appendChild(createHtmlElement("div", "title_3", null, "Forget The Rest!"))
    
    

    
    $main.appendChild($title);
    $main.appendChild($img)
    $content.appendChild($main);
  }

  export{middle}