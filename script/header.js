// VARS
const Btn = document.querySelector('.header__button')
const navMenu = document.querySelector('.header__nav')

// LISTENER
Btn.addEventListener('click', function() {
    checkBtn();
    checkMenu();

    console.log('clicked')
})

// FUNCTIONS
const checkBtn = function() {
    if (Btn.classList.contains('header__button--closed')) {
        Btn.classList.remove('header__button--closed')
        Btn.classList.add('header__button--opened')    
    } else {
        Btn.classList.remove('header__button--opened')
        Btn.classList.add('header__button--closed')    
    }
}

const checkMenu = function() {
    if (navMenu.classList.contains('header__nav--closed')) {
        navMenu.classList.remove('header__nav--closed')
        navMenu.classList.add('header__nav--opened')    
    } else {
        navMenu.classList.remove('header__nav--opened')
        navMenu.classList.add('header__nav--closed')    
    }
}
