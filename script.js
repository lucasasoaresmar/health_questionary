const a = 5;

var formLife = document.getElementsById('lifeQualityId');

if(formLife.addEventListener){
    formLife.addEventListener("submit", callback, false);  //Modern browsers
}else if(formLife.attachEvent){
    formLife.attachEvent('onsubmit', callback);            //Old IE
}