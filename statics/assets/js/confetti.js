const particles = ["❤️","💖","💗","💘","💝","💋","🌸"];

function crearParticula(){

  const el = document.createElement("div");
  el.className = "particle";

  el.innerHTML = particles[Math.floor(Math.random()*particles.length)];

  el.style.position = "fixed";
  el.style.left = Math.random()*100 + "vw";
  el.style.bottom = "-30px";
  el.style.fontSize = (18 + Math.random()*8) + "px";
  el.style.pointerEvents = "none";
  el.style.animation = "rise 7s linear";

  document.body.appendChild(el);

  setTimeout(()=>{
    el.remove();
  },7000);

}

function lluvia(){

  const cantidad = 2; // muy pocas partículas

  for(let i=0;i<cantidad;i++){
    setTimeout(crearParticula, i*700);
  }

}

setInterval(lluvia,2000);