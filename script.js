/* =============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =============== CHANGE BACKGROUND HEADER =============== */
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =============== SHOW SCROLL UP =============== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =============== CART COUNTER =============== */
let count = 0;
const cartCount = document.querySelector('.cart-count');
const addBtns = document.querySelectorAll('.products__button');

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;

        // Simple animation feedback
        btn.innerHTML = '<i class="ri-check-line"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i class="ri-shopping-bag-line"></i>';
        }, 1000);
    });
});

/* =============== NEWSLETTER SUBSCRIPTION =============== */
const newsletterForm = document.getElementById('newsletter-form');
const newsletterBtn = document.getElementById('newsletter-btn');
const newsletterMessage = document.getElementById('newsletter-message');
const newsletterInput = document.querySelector('.newsletter__input');

newsletterBtn.addEventListener('click', () => {
    if (newsletterInput.value === '') {
        newsletterMessage.textContent = 'Please enter your email.';
        newsletterMessage.style.color = 'red';
    } else {
        newsletterMessage.textContent = 'Thank you for subscribing!';
        newsletterMessage.style.color = 'green';
        newsletterInput.value = '';
        setTimeout(() => {
            newsletterMessage.textContent = '';
        }, 3000);
    }
});

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
