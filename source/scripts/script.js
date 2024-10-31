function navscroll() {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? document.querySelector("nav").classList.add("nav-background") : document.querySelector("nav").classList.remove("nav-background"), document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? document.getElementById("back_to_top").style.opacity = "1" : document.getElementById("back_to_top").style.opacity = "0"
 }
 AOS.init();


        