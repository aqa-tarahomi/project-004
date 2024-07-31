const change_lang= document.getElementById("change-lang-button")
   change_lang.addEventListener("click",()=>{
    location.reload();
   })
    if(window.location.hash){
        if( window.location.hash === "#en"){
            document.getElementById("landing-text").innerHTML="landing"
        document.getElementById("about-text").innerHTML="About us";
        document.getElementById("services-text").innerHTML="Our Services";
         document.getElementById("protofilo-text").innerHTML="Protofilo";
         document.getElementById("team-text").innerHTML="Our Team";
         document.getElementById("contact-text").innerHTML="Contact Us";
         document.getElementById("landing-text-1").innerHTML="Lorem Ipsum is a mock text produced with incomprehensible simplicity from the printing industry and using graphic designers"
         document.getElementById("landing-text-2").innerHTML="Lorem Ipsum's fake text with the production of incomprehensible simplicity from the printing industry"
         document.getElementById("landing-text-3").innerHTML="Lorem ipsum dolor"
         document.getElementById("landing-text-4").innerHTML="Lorem ipsum dolor"
         document.getElementById("landing-text-5").innerHTML="Lorem ipsum dolor"
         document.getElementById("about-header-text-1").innerHTML="Learn more about us"
         document.getElementById("about-header-text-2").innerHTML="Learn more about us"
         document.getElementById("about-body-text-1").innerHTML="Lorem Ipsum is a fake text with an incomprehensible simplicity produced by the printing industry"
         document.getElementById("about-body-text-2").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary."
         document.getElementById("about-body-text-3").innerHTML="Lorem ipsum dolor"
         document.getElementById("about-body-text-4").innerHTML="Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry"
         document.getElementById("about-body-text-5").innerHTML="The list of printers and texts, but also newspapers and magazines in columns and rows as necessary"
         document.getElementById("about-body-text-6").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary."
         document.getElementById("about-body-text-7").innerHTML="Lorem ipsum dolor"
         document.getElementById("about-body-text-8").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
         document.getElementById("about-body-text-9").innerHTML="Lorem ipsum dolor"
         document.getElementById("about-body-text-10").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
         document.getElementById("about-body-text-11").innerHTML="Lorem ipsum dolor"
         document.getElementById("about-body-text-12").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
         document.getElementById("about-body-text-13").innerHTML="Lorem ipsum dolor"
         document.getElementById("about-body-text-14").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
         document.getElementById("services-header-text-1").innerHTML="services"
         document.getElementById("services-header-text-2").innerHTML="our services"
         document.getElementById("services-body-text-1").innerHTML="Lorem Ipsum is a fictional text"
         document.getElementById("services-body-text-2").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
         document.getElementById("services-body-text-3").innerHTML="Lorem Ipsum is a fictional text"
         document.getElementById("services-body-text-4").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
         document.getElementById("services-body-text-5").innerHTML="Lorem Ipsum is a fictional text"
         document.getElementById("services-body-text-6").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
         document.getElementById("services-body-text-7").innerHTML="Lorem Ipsum is a fictional text"
         document.getElementById("services-body-text-8").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
         document.getElementById("services-body-text-9").innerHTML="Lorem Ipsum is a fictional text"
         document.getElementById("services-body-text-10").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
         document.getElementById("services-body-text-11").innerHTML="Lorem Ipsum is a fictional text"
         document.getElementById("services-body-text-12").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
         document.getElementById("portfolio-header-text-1").innerHTML="Protofilo"
         document.getElementById("portfolio-header-text-2").innerHTML="our Protofilo"
         document.getElementById("portfolio-body-text-1").innerHTML="Lorem Ipsum mock text with"
         document.getElementById("portfolio-body-text-2").innerHTML="Lorem Ipsum"
         document.getElementById("portfolio-body-text-3").innerHTML="Lorem Ipsum mock text with"
         document.getElementById("portfolio-body-text-4").innerHTML="Lorem Ipsum"
         document.getElementById("portfolio-body-text-5").innerHTML="Lorem Ipsum mock text with"
         document.getElementById("portfolio-body-text-6").innerHTML="Lorem Ipsum"
         document.getElementById("portfolio-body-text-7").innerHTML="Lorem Ipsum mock text with"
         document.getElementById("portfolio-body-text-8").innerHTML="Lorem Ipsum"
         document.getElementById("portfolio-body-text-9").innerHTML="Lorem Ipsum mock text with"
         document.getElementById("portfolio-body-text-10").innerHTML="Lorem Ipsum"
         document.getElementById("portfolio-body-text-11").innerHTML="Lorem Ipsum mock text with"
         document.getElementById("portfolio-body-text-12").innerHTML="Lorem Ipsum"
         document.getElementById("team-header-text-1").innerHTML="Our professional staff"
         document.getElementById("team-header-text-2").innerHTML="Get to know the professional staff of the Future Green Research Company"
         document.getElementById("team-body-text-1").innerHTML="Ipsom text"
         document.getElementById("team-body-text-2").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
         document.getElementById("team-body-text-3").innerHTML="Ipsom text"
         document.getElementById("team-body-text-4").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
         document.getElementById("team-body-text-5").innerHTML="Ipsom text"
         document.getElementById("team-body-text-6").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
         document.getElementById("team-body-text-7").innerHTML="Ipsom text"
         document.getElementById("team-body-text-8").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
         document.getElementById("contact-header-text-1").innerHTML="contact us"
         document.getElementById("contact-header-text-2").innerHTML="Contact us for more information"
         document.getElementById("contact-body-text-1").innerHTML="contact us"
         document.getElementById("contact-body-text-2").innerHTML="Contact us for more information"
         document.getElementById("contact-body-text-10").innerHTML="Support... "
         document.getElementById("contact-body-text-3").innerHTML="our address"
         document.getElementById("contact-body-text-4").innerHTML="The address of the office of the future research company"
         document.getElementById("contact-body-text-5").innerText="Mashhad holy shrine of  peace be upon him"
         document.getElementById("contact-body-text-6").innerHTML="Our email"
         document.getElementById("contact-body-text-7").innerHTML="Contact us by email"
         document.getElementById("contact-body-text-8").innerHTML="Green research company in virtual space"
         document.getElementById("contact-body-text-9").innerHTML="Contact us by email   "














        document.documentElement.setAttribute('lang' , 'en');
        document.documentElement.setAttribute('dir' , 'ltr');
       change_lang.onclick=href="#fa"
    }
    if( window.location.hash === "#fa"){
        document.getElementById("landing-text").innerHTML="لورم"
    document.getElementById("about-text").innerHTML="About us";
    document.getElementById("services-text").innerHTML="Our Services";
     document.getElementById("protofilo-text").innerHTML="Protofilo";
     document.getElementById("team-text").innerHTML="Our Team";
     document.getElementById("contact-text").innerHTML="Contact Us";
     document.getElementById("landing-text-1").innerHTML="Lorem Ipsum is a mock text produced with incomprehensible simplicity from the printing industry and using graphic designers"
     document.getElementById("landing-text-2").innerHTML="Lorem Ipsum's fake text with the production of incomprehensible simplicity from the printing industry"
     document.getElementById("landing-text-3").innerHTML="Lorem ipsum dolor"
     document.getElementById("landing-text-4").innerHTML="Lorem ipsum dolor"
     document.getElementById("landing-text-5").innerHTML="Lorem ipsum dolor"
     document.getElementById("about-header-text-1").innerHTML="Learn more about us"
     document.getElementById("about-header-text-2").innerHTML="Learn more about us"
     document.getElementById("about-body-text-1").innerHTML="Lorem Ipsum is a fake text with an incomprehensible simplicity produced by the printing industry"
     document.getElementById("about-body-text-2").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary."
     document.getElementById("about-body-text-3").innerHTML="Lorem ipsum dolor"
     document.getElementById("about-body-text-4").innerHTML="Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry"
     document.getElementById("about-body-text-5").innerHTML="The list of printers and texts, but also newspapers and magazines in columns and rows as necessary"
     document.getElementById("about-body-text-6").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary."
     document.getElementById("about-body-text-7").innerHTML="Lorem ipsum dolor"
     document.getElementById("about-body-text-8").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
     document.getElementById("about-body-text-9").innerHTML="Lorem ipsum dolor"
     document.getElementById("about-body-text-10").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
     document.getElementById("about-body-text-11").innerHTML="Lorem ipsum dolor"
     document.getElementById("about-body-text-12").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
     document.getElementById("about-body-text-13").innerHTML="Lorem ipsum dolor"
     document.getElementById("about-body-text-14").innerHTML="Lorem Epsom is a fake text produced with printing industry and using graphic designers, printers and texts, but also newspapers and magazines."
     document.getElementById("services-header-text-1").innerHTML="services"
     document.getElementById("services-header-text-2").innerHTML="our services"
     document.getElementById("services-body-text-1").innerHTML="Lorem Ipsum is a fictional text"
     document.getElementById("services-body-text-2").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
     document.getElementById("services-body-text-3").innerHTML="Lorem Ipsum is a fictional text"
     document.getElementById("services-body-text-4").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
     document.getElementById("services-body-text-5").innerHTML="Lorem Ipsum is a fictional text"
     document.getElementById("services-body-text-6").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
     document.getElementById("services-body-text-7").innerHTML="Lorem Ipsum is a fictional text"
     document.getElementById("services-body-text-8").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
     document.getElementById("services-body-text-9").innerHTML="Lorem Ipsum is a fictional text"
     document.getElementById("services-body-text-10").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
     document.getElementById("services-body-text-11").innerHTML="Lorem Ipsum is a fictional text"
     document.getElementById("services-body-text-12").innerHTML="Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers."
     document.getElementById("portfolio-header-text-1").innerHTML="Protofilo"
     document.getElementById("portfolio-header-text-2").innerHTML="our Protofilo"
     document.getElementById("portfolio-body-text-1").innerHTML="Lorem Ipsum mock text with"
     document.getElementById("portfolio-body-text-2").innerHTML="Lorem Ipsum"
     document.getElementById("portfolio-body-text-3").innerHTML="Lorem Ipsum mock text with"
     document.getElementById("portfolio-body-text-4").innerHTML="Lorem Ipsum"
     document.getElementById("portfolio-body-text-5").innerHTML="Lorem Ipsum mock text with"
     document.getElementById("portfolio-body-text-6").innerHTML="Lorem Ipsum"
     document.getElementById("portfolio-body-text-7").innerHTML="Lorem Ipsum mock text with"
     document.getElementById("portfolio-body-text-8").innerHTML="Lorem Ipsum"
     document.getElementById("portfolio-body-text-9").innerHTML="Lorem Ipsum mock text with"
     document.getElementById("portfolio-body-text-10").innerHTML="Lorem Ipsum"
     document.getElementById("portfolio-body-text-11").innerHTML="Lorem Ipsum mock text with"
     document.getElementById("portfolio-body-text-12").innerHTML="Lorem Ipsum"
     document.getElementById("team-header-text-1").innerHTML="Our professional staff"
     document.getElementById("team-header-text-2").innerHTML="Get to know the professional staff of the Future Green Research Company"
     document.getElementById("team-body-text-1").innerHTML="Ipsom text"
     document.getElementById("team-body-text-2").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
     document.getElementById("team-body-text-3").innerHTML="Ipsom text"
     document.getElementById("team-body-text-4").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
     document.getElementById("team-body-text-5").innerHTML="Ipsom text"
     document.getElementById("team-body-text-6").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
     document.getElementById("team-body-text-7").innerHTML="Ipsom text"
     document.getElementById("team-body-text-8").innerHTML="Worm Epsom fake text with the production of incomprehensible simplicity from the printing industry and with stipulation"
     document.getElementById("contact-header-text-1").innerHTML="contact us"
     document.getElementById("contact-header-text-2").innerHTML="Contact us for more information"
     document.getElementById("contact-body-text-1").innerHTML="contact us"
     document.getElementById("contact-body-text-2").innerHTML="Contact us for more information"
     document.getElementById("contact-body-text-10").innerHTML="Support... "
     document.getElementById("contact-body-text-3").innerHTML="our address"
     document.getElementById("contact-body-text-4").innerHTML="The address of the office of the future research company"
     document.getElementById("contact-body-text-5").innerText="Mashhad holy shrine of  peace be upon him"
     document.getElementById("contact-body-text-6").innerHTML="Our email"
     document.getElementById("contact-body-text-7").innerHTML="Contact us by email"
     document.getElementById("contact-body-text-8").innerHTML="Green research company in virtual space"
     document.getElementById("contact-body-text-9").innerHTML="Contact us by email   "














    document.documentElement.setAttribute('lang' , 'fa');
    document.documentElement.setAttribute('dir' , 'rtl');
    change_lang.onclick.href="#en"
}
    }
    
