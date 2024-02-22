let luxury = document.querySelector(".luxury");
let sport = document.querySelector(".sport");
let suv = document.querySelector(".suv");
let muscle = document.querySelector(".muscle");

let grid1 = document.querySelector(".grid1");
let grid2 = document.querySelector(".grid2");
let grid3 = document.querySelector(".grid3");
let grid4 = document.querySelector(".grid4");

let after1 = document.querySelector(".after1");
let after2 = document.querySelector(".after2");
let after3 = document.querySelector(".after3");
let after4 = document.querySelector(".after4");

function call(){
    alert("please work");
}
luxury.addEventListener("click",()=>{
     grid1.style.display="grid";
     grid2.style.display="none";
     grid3.style.display="none";
     grid4.style.display="none";
     after1.style.display="inline-block";
     after1.style.transform="Scale(1)";
     after2.style.transform="Scale(0)";
     after3.style.transform="Scale(0)";
     after4.style.transform="Scale(0)";
})
sport.addEventListener("click",()=>{
     grid1.style.display="none";
     grid2.style.display="grid";
     grid3.style.display="none";
     grid4.style.display="none";
     after2.style.display="inline-block";
     after1.style.transform="Scale(0)";
     after2.style.transform="Scale(1)";
     after3.style.transform="Scale(0)";
     after4.style.transform="Scale(0)";

})
suv.addEventListener("click",()=>{
     grid1.style.display="none";
     grid2.style.display="none";
     grid3.style.display="grid";
     grid4.style.display="none";
     after3.style.display="inline-block";
     after1.style.transform="Scale(0)";
     after2.style.transform="Scale(0)";
     after3.style.transform="Scale(1)";
     after4.style.transform="Scale(0)";
})
muscle.addEventListener("click",()=>{
     grid1.style.display="none";
     grid2.style.display="none";
     grid3.style.display="none";
     grid4.style.display="grid";
     after4.style.display="inline-block";
     after1.style.transform="Scale(0)";
     after2.style.transform="Scale(0)";
     after3.style.transform="Scale(0)";
     after4.style.transform="Scale(1)";
})




const brands = document.querySelector(".brands");
const arrows = document.querySelectorAll(".brandbox i"); 
const firstCardWidth = brands.querySelector(".card").offsetWidth;

arrows.forEach(btn => {
    
    btn.addEventListener("click", ()=>{
        brands.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})



