// JavaScript Document
var menu2 = document.getElementById('menu2');
var content ="";
//$.mobile.activePage ('#M_menu');
 
content = '<div id="menuP" align="center"><a href="#M_game_area"><div id="bPlay" class="M_button" align="center" onClick="PauseG()" > Continue</div></a><div id="bSeting" class="M_button" >Setings</div><div id="bHelp" class="M_button" >Help</div><a href="#M_menu"><div id="bPlay" class="M_button" align="center" > Main menu</div></a></div>';

menu2.innerHTML=content;
