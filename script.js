// selecting element 
let menuBtn = document.getElementById("menu-btn");
let asideSection = document.querySelector("aside");
let closeBtn = document.getElementById("close-btn")
let themeToggler = document.querySelector(".theme-toggler");

// set function that show  the aside section
menuBtn.addEventListener("click", function() {
    asideSection.classList.add("show-aside");
})

// set function that hide  the aside section
closeBtn.addEventListener("click", function() {
    asideSection.classList.remove("show-aside");
})

// set function that change theme
themeToggler.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme-variables");
    
    themeToggler.querySelector(".span:nth-child(1)").
    classList.toggle("active")
    themeToggler.querySelector(".span:nth-child(2)").
    classList.toggle("active")
})
