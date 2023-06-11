"use strict"

window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader")
    setTimeout(function() {
        loader.style.opacity = "0"
        setTimeout(function() {
            loader.style.display = "none"
        }, 2000)
    }, 3500);

   let MenuBurger = document.querySelector(".header-wrap i"); 
   let LeftList = document.querySelector(".header-left-list")
   let x = document.querySelector(".header-wrap .x")

   if(MenuBurger.addEventListener("click", () => {
   LeftList.style.display = 'block'
   
   }))
   
    console.log(MenuBurger);
    console.log(x);
})
