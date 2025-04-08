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

    let element = document.createElement("li");
    element.innerText="Another item"; // <li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);

    //lista.item(0).before(element); inserta el elemento antes de la lista
    //lista.item(0).prepend(element2); inserta el inicio de la lista
    //lista.item(0).append(element); // inserta el elemento al final de la lista
    //lista.item(0).after(element2); // inserta el elemento despues de la lista
    
    //lista.item(1).insertAdjacentElement("afterbegin",element);
    //lista.item(1).insertAdjacentElement("beforeend",element2);
    lista.item(1).insertAdjacentHTML("afterend",`<li class="list-group-item">After End Item</li>`);
    lista.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before Begin Item</li>`);

}); // Accionar un boton y agregar un elemento li 

// https://developer.mozilla.org/es/docs/Web/Events
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators#asignacion
// https://developer.mozilla.org/en-US/curriculum/core/semantic-html/