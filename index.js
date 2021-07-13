
var randomNumber1=Math.floor(Math.random()*6)+1;

var imgx ="dice"+randomNumber1+".png";
// document.getElementsByClassName("img1").setAttributes("src","img");

document.querySelectorAll("img")[0].setAttribute("src",imgx);

var randomNumber2=Math.floor(Math.random()*6)+1;

var imgn ="dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",imgn);


if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelectorAll("h1")[0].innerHTML="Player 2 wins!";
}
else{
    document.querySelectorAll("h1")[0].innerHTMl="Draw!";
}