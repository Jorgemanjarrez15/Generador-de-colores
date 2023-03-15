const btnCrear = document.querySelector('.crear');
const colorFonndo = document.querySelector('.color');
const hexColor = document.querySelector('.hex-color');
const main =  document.querySelector('.main');


let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


function crearColorHexadecimal() {
  
  let nombreColor = "#";
  for(let i = 0; i < 6; i++) {
    nombreColor += hex[numeroRandom()];
  }

  colorFonndo.style.backgroundColor = nombreColor;
  hexColor.textContent = nombreColor;
  main.style.backgroundColor = nombreColor;
  
}

function numeroRandom() {
  return Math.floor(Math.random() * hex.length);
}



btnCrear.addEventListener('click', crearColorHexadecimal);