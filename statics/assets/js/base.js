const shareButton = document.getElementById("shareBtn");
const shareStatus = document.getElementById("shareStatus");
let shareStatusTimeout;

shareButton.addEventListener("click", async () => {
    try {
        if (navigator.share) {
            await navigator.share({ title: document.title, url: window.location.href });
        } else {
            await navigator.clipboard.writeText(window.location.href);
            shareStatus.textContent = "Enlace copiado";
            clearTimeout(shareStatusTimeout);
            shareStatusTimeout = setTimeout(() => { shareStatus.textContent = ""; }, 3000);
        }
    } catch (error) {
        if (error.name !== "AbortError") {
            shareStatus.textContent = "Copia el enlace desde la barra de direcciones para compartir.";
        }
    }
});
