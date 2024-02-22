const brands = document.querySelector(".brands");
const arrows = document.querySelectorAll(".brandbox i"); 
const firstCardWidth = brands.querySelector(".card").offsetWidth;

arrows.forEach(btn => {
    
    btn.addEventListener("click", ()=>{
        brands.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})