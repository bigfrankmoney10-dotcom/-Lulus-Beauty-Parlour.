// ===============================
// Lulu's Beauty Parlour
// script.js
// ===============================
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// Fade in cards while scrolling
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll(".card").forEach(card=>{
    card.classList.add("hidden");
    observer.observe(card);
});
// Gallery Animation
document.querySelectorAll(".gallery-grid img").forEach(image=>{
    image.addEventListener("mouseenter",()=>{
        image.style.transform="scale(1.05)";
    });
    image.addEventListener("mouseleave",()=>{
        image.style.transform="scale(1)";
    });
});
// Button Animation
const button = document.querySelector(".btn");
button.addEventListener("mouseenter",()=>{
    button.style.transform="scale(1.08)";
});
button.addEventListener("mouseleave",()=>{
    button.style.transform="scale(1)";
});
// Navbar Shadow
window.addEventListener("scroll",()=>{
    const navbar=document.querySelector(".navbar");
    if(window.scrollY>60){
        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";
    }else{
        navbar.style.boxShadow="none";
    }
});
// Current Year
const footer=document.querySelector("footer p:last-child");
footer.innerHTML="© "+new Date().getFullYear()+" Lulu's Beauty Parlour. All Rights Reserved.";
// Reveal Animation CSS Class
const style=document.createElement("style");
style.innerHTML=`
.hidden{
opacity:0;
transform:translateY(50px);
transition:.8s ease;
}
.show{
opacity:1;
transform:translateY(0);
}
`;
document.head.appendChild(style);
// Welcome Message
console.log("Welcome to Lulu's Beauty Parlour Website");
// Loading Animation
window.addEventListener("load",()=>{
document.body.style.opacity="1";
});
document.body.style.opacity="0";
document.body.style.transition="opacity .8s";
