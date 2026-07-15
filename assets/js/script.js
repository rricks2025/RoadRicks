/*
===========================================
ROADRICKS Website
Version 0.5
Author: Eli
===========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Smooth Scrolling
    // ===========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ===========================
    // Fade In Sections
    // ===========================

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{
        threshold:0.15
    });


    document.querySelectorAll("section").forEach(section=>{

        section.classList.add("fade-section");

        observer.observe(section);

    });


    // ===========================
    // Active Navigation
    // ===========================

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if(window.scrollY >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });


    // ===========================
    // Navbar Shadow
    // ===========================

    const nav = document.querySelector("nav");

    window.addEventListener("scroll",()=>{

        if(!nav) return;

        if(window.scrollY > 30){

            nav.classList.add("nav-scrolled");

        }else{

            nav.classList.remove("nav-scrolled");

        }

    });


    // ===========================
    // Back To Top Button
    // ===========================

    const topButton = document.createElement("button");

    topButton.innerHTML = "▲";

    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    topButton.style.display = "none";

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            topButton.style.display = "block";

        }else{

            topButton.style.display = "none";

        }

    });


    // ===========================
    // Console Message 😎
    // ===========================

    console.log("🎸 ROADRICKS Website v0.5 Loaded");

});