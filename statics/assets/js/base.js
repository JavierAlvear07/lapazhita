//shake object effect
const boxes = document.querySelectorAll(".shake-box");
    
function shake() {
    boxes.forEach(box => {

    box.classList.remove("animate__animated","animate__shakeX");
    void box.offsetWidth; // fuerza reinicio de animación

    box.classList.add("animate__animated","animate__shakeX");

    });
}
    
setInterval(shake, 5000);

// Share media social link
document.getElementById("shareBtn").addEventListener("click", async () => {

    if (navigator.share) {

    await navigator.share({
        url: window.location.href
    });

    }

});