// MOBILE NAVIGATION

function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("show");
}

// CLOSE MENU WHEN CLICKING A LINK

document.querySelectorAll("#navLinks a").forEach(link=>{
    link.addEventListener("click",()=>{
        document.getElementById("navLinks").classList.remove("show");
    });
});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".feature-card,.place-card,.food-card,.info-card,.about-content,.about-image,.section-heading"
);

revealElements.forEach(element=>{
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold:0.12
});

revealElements.forEach(element=>{
    observer.observe(element);
});

// 3D CARD MOUSE EFFECT

document.querySelectorAll(".feature-card,.place-card,.food-card").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        if(window.innerWidth < 768) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width/2;
        const centerY = rect.height/2;

        const rotateX = (centerY-y)/25;
        const rotateY = (x-centerX)/25;

        card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave",()=>{
        card.style.transform="";
    });

});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if(!name || !email || !subject || !message){
            formMessage.textContent="Please fill in all fields.";
            return;
        }

        const whatsappMessage =
        `Hello, my name is ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

        formMessage.textContent="Opening WhatsApp to send your message...";

        window.open(
            `https://wa.me/?text=${whatsappMessage}`,
            "_blank"
        );

        contactForm.reset();
    });

}

// 3D HERO PARALLAX

const heroVisual = document.querySelector(".hero-visual");

if(heroVisual){

    document.addEventListener("mousemove",e=>{

        if(window.innerWidth < 768) return;

        const x = (window.innerWidth/2-e.clientX)/45;
        const y = (window.innerHeight/2-e.clientY)/45;

        heroVisual.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

    document.addEventListener("mouseleave",()=>{
        heroVisual.style.transform="rotateY(0) rotateX(0)";
    });
}