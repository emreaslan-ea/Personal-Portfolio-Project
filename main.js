const HamburgerMenu = document.querySelector("#navigation .nav-icon");
const navContent = document.getElementById("nav-content");
const closeBtn = document.querySelector('.close-button');
const navitems = document.querySelectorAll('#nav-content .nav-item ul li a');
const scrollbutton = document.querySelector(".scroll-top");

/* Scroll button */
if(scrollbutton){
    window.addEventListener('scroll', ()=> {
      if(scrollY > (window.innerHeight * 1.2)){
        scrollbutton.style.display="flex";
      }else{
        scrollbutton.style.display="none";
      }
    });
    scrollbutton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }

/* Hamburger menu */  
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