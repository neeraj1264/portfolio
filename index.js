 let cvBtn = document.getElementById("cvBtn");
 let submit = document.getElementById("submit");
 let ul = document.querySelector("ul");
let bar = document.getElementById("bar");

bar.addEventListener("click", function(){
    ul.classList.toggle("showData");

    if (ul.classList.contains("showData")) {
        bar.className = "fa-solid fa-xmark";
    } else {
        bar.className = "fa-solid fa-bars";
    }
});

// Add click event listeners to each navigation link
let navLinks = document.querySelectorAll("ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        ul.classList.remove("showData");
        bar.className = "fa-solid fa-bars";
    });
});


