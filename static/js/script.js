// Mobile bars
const mobileBtn = document.getElementById('mobile');
const navLinks = document.getElementById('navlinks');

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('change');
    navLinks.classList.toggle('act');
    // header.classList.toggle('mobile-header-color');

    /*if (navLinks.classList.contains('act')) {
        mobileBtn.classList.add('mob-top');
    } else {
        mobileBtn.classList.remove('mob-top');
    }*/

});


const scrollToTopBtn = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//Header
const header = document.getElementById('navbar');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

// Project hover