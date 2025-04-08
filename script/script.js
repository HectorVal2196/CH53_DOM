// Ejercicios DOM

let encabezado2 = document.getElementById("encabezado2"); //Llamar elementos por id
let encabezado1 = document.getElementById("encabezado1"); //Llamar elementos por id
let lista = document.getElementsByTagName("ul"); // Llamar elementos por tag
let elemento = document.getElementsByClassName("list-group-item") //Llamar elementos por clase
let otroElemento = document.querySelector("ul>li")
let otrosElementos = document.querySelectorAll("ul>li")
let btnMostrar = document.getElementById("btnMostrar") //Accionar un boton

encabezado1.innerHTML = "<em>Ejercicio</em> DOM"; // Llamar elementos por id
encabezado2.innerText = "DOM Exercise"; // Llamar elementos por id

console.log(lista.length); // Llamar elementos por tag
console.log(lista[0]); // Llamar elementos por tag
console.log(lista.item(1)); // Llamar elementos por tag
console.log(elemento.item(2)); //Llamar elementos por clase
console.log(elemento.length); //Llamar elementos por clase
console.log("otroElemento", otroElemento)
console.log(otrosElementos.length)

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); // no hagas lo que haces por defecto
    console.log("boton btnModificar presionado");
}); // Accionar un boton

// https://developer.mozilla.org/es/docs/Web/Events
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators#asignacion
// https://developer.mozilla.org/en-US/curriculum/core/semantic-html/