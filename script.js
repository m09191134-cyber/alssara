/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

    });

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   ACTIVE NAV LINK
===================================================== */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop = document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =====================================================
   CONTACT FORM
===================================================== */

const form = document.querySelector(".contact-form form");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "تم استلام طلبك بنجاح. سيتم التواصل معك قريباً."
    );

});