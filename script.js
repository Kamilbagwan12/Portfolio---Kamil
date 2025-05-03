let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active"); // fixed
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active"); // fixed
}



const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Backend Developer','Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    loop: true,

  });

