//una alerta
document.querySelectorAll(".btn-hb").forEach(btn => {

  const url = "https://hoo.be/paziitax";

  btn.addEventListener("click", function(e) {

    if (sessionStorage.getItem("adultWarningShown") === "true") {
      window.location.href = url;
      return;
    }

    Swal.fire({
      title: "⚠️ Advertencia",
      html: `
        <p>Este sitio tiene <strong>contenido explícito para adultos</strong> 😈💋</p>
        <p>Debes ser mayor de 18 años para continuar.</p>

        <label style="display:flex;align-items:center;gap:6px;margin-top:10px;">
          <input type="checkbox" id="swal-checkbox-hb">
          No mostrar nuevamente
        </label>
      `,
      showCancelButton: true,
      confirmButtonText: `Entrar 😈`,
      cancelButtonText: "Salir 💔",
      reverseButtons: true,
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {

      const checkbox = document.getElementById("swal-checkbox-hb");

      if (checkbox && checkbox.checked) {
        sessionStorage.setItem("adultWarningShown", "true");
      }

      if (result.isConfirmed) {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "external_link_click",
            platform: "hoo.be",
            link_url: "https://hoo.be/paziitax"
          });
        }
        window.location.href = url;
      }

    });

  });

});




//diferentes alertas
document.addEventListener("DOMContentLoaded", () => {

  const botones = document.querySelectorAll(".btn-alert");

  botones.forEach(boton => {

    boton.addEventListener("click", function() {

      const link = this.dataset.link;
      const id = this.dataset.id;
      const platform = this.dataset.platform;

      showAlert(link, id, platform);

    });

  });

});



  
  
  function showAlert(link, id, platform) {
  
    const storageKey = "notShowAlert_" + id;
  
    if (sessionStorage.getItem(storageKey) === "true") {
      window.location.href = link;
      return;
    }
    
  
  

    let iconPlatform = "";

    if (platform === "of") {
        iconPlatform = `<img src="/statics/assets/img/onlyfans.svg" width="35">`;
        nombre = "OnlyFans";
    }

    if (platform === "arsmate") {
        iconPlatform = `<img src="/statics/assets/img/arsmate.svg" width="35">`;
        nombre = "Arsmate";
    }
  
    Swal.fire({
      title: "⚠️ Advertencia",
    //   icon: "warning",
      html: `
        <p>Vas a visitar ${iconPlatform}</p>
        <p>Este sitio tiene <strong>contenido explícito para adultos</strong> 😈💋</p>
        <p>Debes ser mayor de 18 años para continuar.</p>
  
        <label style="display:flex;align-items:center;gap:6px;margin-top:10px;">
          <input type="checkbox" id="swal-checkbox">
          No mostrar nuevamente
        </label>
      `,
      showCancelButton: true,
      confirmButtonText: `Entrar 😈`,
      cancelButtonText: "Salir 💔",
      reverseButtons: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: false
  
    }).then((result) => {
  
      const checkbox = document.getElementById("swal-checkbox");
  
      if (checkbox && checkbox.checked) {
        sessionStorage.setItem(storageKey, "true");
      }
  
      if (result.isConfirmed) {
        window.location.href = link;
      }
  
    });
  
  }