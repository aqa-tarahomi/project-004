function navscroll() {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? document.querySelector("nav").classList.add("nav-background") : document.querySelector("nav").classList.remove("nav-background"), document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? document.getElementById("back_to_top").style.opacity = "1" : document.getElementById("back_to_top").style.opacity = "0"
 }
 AOS.init();
 let navmenulinks = document.querySelectorAll(".navbar a");
 
 function navmenuScrollspy() {
    navmenulinks.forEach(e => {
       if (!e.hash) return;
       let o = document.querySelector(e.hash);
       if (!o) return;
       let t = window.scrollY + 200;
       t >= o.offsetTop && t <= o.offsetTop + o.offsetHeight ? (document.querySelectorAll(".navmenu a.active").forEach(e => e.classList.remove("active")), e.classList.add("active")) : e.classList.remove("active")
    })
 }
 window.addEventListener("load", navmenuScrollspy), document.addEventListener("scroll", navmenuScrollspy);



        