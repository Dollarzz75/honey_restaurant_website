const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toogle("sticky", window.scrollY > 80);
});

left menu = document.querySelector('#menu-icon');
left navlist = document.querySelector('.navlist');

menu.oneclick = () =>  {
    menu.classList.toogle('bx-x');
    navlist.classList.toogle('open');
}

window.onscroll = () =>  {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home-text',{delay:300})
sr.reveal ('.home-img',{delay:400})
sr.reveal ('.container',{delay:400})

sr.reveal ('.about-img',{delay:300})
sr.reveal ('.about-text',{delay:300})

sr.reveal ('.middle-text',{delay:300})
sr.reveal ('.row-btn,.shop-content',{delay:300})

sr.reveal ('.review-content,.contact',{delay:300})

git config --global user.email "adepojudolabomi@gmail.com"