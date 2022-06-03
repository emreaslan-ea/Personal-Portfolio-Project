const HamburgerMenu = document.querySelector("#navigation .nav-icon");
const navContent = document.getElementById("nav-content");
const closeBtn = document.querySelector('.close-button');
const navitems = document.querySelectorAll('#nav-content .nav-item ul li a');

HamburgerMenu.addEventListener('click', ()=>{
    navContent.classList.add('show');
})

closeBtn.addEventListener('click', () =>{
    navContent.classList.remove('show');
})

navitems.forEach(link => {
    link.addEventListener('click', ()=> {
        navContent.classList.remove('show');
    })
})