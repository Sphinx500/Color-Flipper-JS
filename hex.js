//creacion de las combinaciones de colores
const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//Obtener el valor random del array y añadir la variable de hex color
btn.addEventListener("click",function(){
let hexColor = '#';
//0 a 6
for (let i=0; i<6; i++) {
    //pasamos la funcion que devuelve valores aleatorios
    hexColor += hex[getRandomNumber()]
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    //pasa el valor que obtenemos y lo multiplica por un valor aleatorio de los colores
  return Math.floor(Math.random() * hex.length);
}