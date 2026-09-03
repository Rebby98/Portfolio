// Initialize AOS animations

AOS.init({
    duration: 800,
    once: true,
    offset: 100
});


// Close mobile navbar after clicking a link

document.querySelectorAll(".nav-link").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar.classList.contains("show")) {
            new bootstrap.Collapse(navbar).hide();
        }

    });

});

// =========================
// WHATSAPP CONTACT FORM
// =========================

const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    // Your WhatsApp number
    const phoneNumber = "254757438691";


    // Create WhatsApp message
    const whatsappMessage =
        `Hello Rebecca,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;


    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);


    // WhatsApp URL
    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`;


    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});

// =========================
// NAVBAR ACTIVE STATE
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});