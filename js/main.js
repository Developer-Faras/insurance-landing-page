window.addEventListener('scroll', function(){
    let scrollTop = window.pageYOffset;

    // Header Active Class Toggle
    const header = document.getElementById('main-header');

    if(scrollTop > 100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})

// Mobile Menu Toggle
const navToggler = document.getElementById('nav-toggler');
const mobileMenu = document.getElementById('mobile-menu');
const navIcon = navToggler.querySelector('i');
// const menuLi = mobileMenu.children;
// const menuLink = menuLi.children;


// console.log(menuLink);

navToggler.addEventListener('click', function(e){
    e.preventDefault();

    mobileMenu.classList.toggle('mobile-show');
    navIcon.classList.toggle('fa-bars');
    navIcon.classList.toggle('fa-times');
})