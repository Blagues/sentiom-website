const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
});

// Sluit menu bij klikken op een link
navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
    });
});
