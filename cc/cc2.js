const title = document.querySelector("h1");
const body = document.querySelector("body");
title.style.color = "white";



function bgColorChange(){
    const width = window.innerWidth;
    if (width>1450) {
        body.style.background = "gold";
    } else if (width>1000){
        body.style.background ="purple";
    } else {
        body.style.background ="blue";
    }
}
window.addEventListener("resize", bgColorChange);