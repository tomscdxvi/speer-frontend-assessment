function toggleMenu()
{
    let menu = document.querySelector(".menu");
    menu.classList.toggle("change");

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("title").classList.toggle("change-title");

    document.getElementById("menu-wrap").classList.toggle("change-menu");

}

let hamburger = document.querySelector(".hamBtn");

hamburger.addEventListener("click", change)