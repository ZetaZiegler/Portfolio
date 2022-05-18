// JavaScript Document
var modo;
var budy;
var dia1;
var dia2;
var contacto;
var mail; 
function comenzar() {
  modo = document.getElementById("modo");

  budy = document.getElementById("budy");

  dia1 = document.getElementById("dia");

  dia2 = document.getElementById("dia2");

  contacto = document.getElementById("contacto");

  mail = document.getElementById("mailto");

  modo.addEventListener("click", cambiamodo, false);
}

function cambiamodo() {
  if (modo.innerHTML == "Modo Nocturno") {
    modo.innerHTML = "Modo Diurno";
    modo.style.backgroundColor = "#8B5A38";
    budy.style.backgroundColor = "#312E50";
    contacto.style.backgroundColor = "#121221";
    mail.style.backgroundColor = "#121221";
    dia1.src = "imagenes/noche.png";
    dia2.src = "imagenes/noche2.png";
  } else {
    modo.innerHTML = "Modo Nocturno";
    modo.style.backgroundColor = "#312E50";
    budy.style.backgroundColor = "#8B5A38";
    contacto.style.backgroundColor = "#2C2627";
    mail.style.backgroundColor = "#2C2627";
    dia1.src = "imagenes/dia.png";
    dia2.src = "imagenes/dia2.png";
  }
  setInterval(1000);
}

 
window.addEventListener("load", comenzar, false);
