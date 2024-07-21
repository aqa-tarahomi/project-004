AOS.init();

function navscroll()
{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("nav").classList.add("nav-background");
    }
    else{
        document.querySelector("nav").classList.remove("nav-background");
    }

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("back_to_top").style.opacity="1";
    }
    else{
        document.getElementById("back_to_top").style.opacity="0";
    }
}

let navmenulinks = document.querySelectorAll('.navbar a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
    } else {
      navmenulink.classList.remove('active');
    }
  })
}
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);
