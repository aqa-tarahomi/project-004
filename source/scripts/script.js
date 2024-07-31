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
//  function change_lang(){
//         if (document.documentElement.getAttribute('lang') == 'fa') {
//             document.getElementById("landing").innerHTML="Home"
//             document.getElementById("about").innerHTML="About Us"
//             document.getElementById("services").innerHTML="Our Services"
//             document.getElementById("protofilo").innerHTML="Protofilo"
//             document.getElementById("team").innerHTML="Our Team"
//             document.getElementById("contact").innerHTML="Contact Us"
//             document.documentElement.setAttribute('lang' , 'en')
//         }
//         else{

//         }
//  }
 window.addEventListener("load", navmenuScrollspy), document.addEventListener("scroll", navmenuScrollspy);