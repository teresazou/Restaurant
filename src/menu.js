import { $content, createHtmlElement } from "./index";
function menu() {
    const $main=document.createElement('div')
    $main.setAttribute('id','main_menu');
   
   const $line1=createHtmlElement("div","line1",null,"");
   const $line2=createHtmlElement("div","line2",null,"");

 
    

   const $name_line1=createHtmlElement("div","name",null,"");
   const $name_line2=createHtmlElement("div","name",null,"");



   const $pic_line1=createHtmlElement("div","pic",null,"");
   const $pic_line2=createHtmlElement("div","pic",null,"");

   const $americano=createHtmlElement("div","americano",null,"Americano");
   const $capccino=createHtmlElement("div","capuccino",null,"Capuccino");
   const $expresso=createHtmlElement("div","expresso",null,"Expresso");
   const $mach=createHtmlElement("div","mach",null,"Machiattos");
   const $decaf=createHtmlElement("div","decaf",null,"Decaf");
   const $hotch=createHtmlElement("div","hotch",null,"Hot Chocolate");
   const $misto=createHtmlElement("div","misto",null,"Misto");
   const $fwhite=createHtmlElement("div","fwhite",null,"Flat White");
   const $latte=createHtmlElement("div","latte",null,"Latte");
   const $mocha=createHtmlElement("div","mocha",null,"Mocha");
    

    var $americano_pic=createHtmlElement("img","pictures",null," ");
    var $capcci_pic=createHtmlElement("img","pictures",null," ");
    var $expre_pic=createHtmlElement("img","pictures",null," ");
    var $mach_pic=createHtmlElement("img","pictures",null," ");
    var $decaf_pic=createHtmlElement("img","pictures",null," ");
    var $hotch_pic=createHtmlElement("img","pictures",null," ");
    var $misto_pic=createHtmlElement("img","pictures",null," ");
    var $fwhite_pic=createHtmlElement("img","pictures",null," ");
    var $latte_pic=createHtmlElement("img","pictures",null," ");
    var $mocha_pic=createHtmlElement("img","pictures",null," ");


    $americano_pic.src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242";
    $capcci_pic.src="https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242";
    $expre_pic.src="https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242";
    $mach_pic.src="https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_1242"
    $decaf_pic.src="https://globalassets.starbucks.com/assets/51bf549cd8e9434da941fec33b820d39.jpg?impolicy=1by1_wide_1242"
    $hotch_pic.src="https://globalassets.starbucks.com/assets/d39650cf28d44aa283a0f311581e3491.jpg?impolicy=1by1_wide_1242"
    $misto_pic.src="https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_1242";
    $fwhite_pic.src="https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_wide_1242";
    $latte_pic.src="https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242";
    $mocha_pic.src="https://globalassets.starbucks.com/assets/f4ec500b34624242b15c2d29e53f3c48.jpg?impolicy=1by1_wide_1242"

    $pic_line1.appendChild($americano_pic);
    $pic_line1.appendChild($capcci_pic);
    $pic_line1.appendChild($expre_pic);
    $pic_line1.appendChild($mach_pic)
    $pic_line1.appendChild($decaf_pic)
    $pic_line1.appendChild($hotch_pic)

    

    $pic_line2.appendChild($misto_pic);
    $pic_line2.appendChild($fwhite_pic);
    $pic_line2.appendChild($latte_pic);
    $pic_line2.appendChild($mocha_pic)

    $name_line1.appendChild($americano)
    $name_line1.appendChild($capccino)
    $name_line1.appendChild($expresso)
    $name_line1.appendChild($mach)
    $name_line1.appendChild($decaf)
    $name_line1.appendChild($hotch)


    $name_line2.appendChild($misto)
    $name_line2.appendChild($fwhite)   
    $name_line2.appendChild($latte) 
    $name_line2.appendChild($mocha)


    $line1.appendChild($name_line1)
    $line1.appendChild($pic_line1)
    
    $line2.appendChild($name_line2)
    $line2.appendChild($pic_line2)
    



    $main.appendChild($line1)
    $main.appendChild($line2)
    $content.appendChild($main);
  }


export{menu}