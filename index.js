//sell box view and hide
let sellbox = document.querySelector(".sellbox");
let sellbtn = document.querySelector(".sellbtn");
let x = document.querySelector(".fa-x");
let sell = document.querySelector(".sell");
let caricon = document.querySelector(".fa-car");
let close = document.querySelector(".end");
let blur = document.querySelector(".bgblur");


x.addEventListener("click", ()=>{
    sellbox.style.display="none";
    caricon.style.color = "white";
     sellbtn.style.borderColor = "white";
     sellbtn.style.color = "white";
     blur.style.display = "none";

})


function box(){
     sellbox.style.display = "block";
     caricon.style.color = "#B31312";
     sellbtn.style.borderColor = "#B31312";
     sellbtn.style.color = "#B31312";
     blur.style.display = "block";
}
function end(){
    sellbox.style.display="none";
    caricon.style.color = "white";
    sellbtn.style.borderColor = "white";
    sellbtn.style.color = "white";
    blur.style.display = "none";
}


//sellbox view and hide




const brands = document.querySelector(".brands");
const arrows = document.querySelectorAll(".brandbox i"); 
const firstCardWidth = brands.querySelector(".cardss").offsetWidth;

arrows.forEach(btn => {
    
    btn.addEventListener("click", ()=>{
        brands.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})




