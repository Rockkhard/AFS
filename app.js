const navSlide = () => {
    const navBar = document.querySelector('.navBar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav

    navBar.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
        link.getElementsByClassName.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 1}s`;
         });
    //navbar animation
    navBar.classList.toggle('toggle');
    });

}

navSlide();

