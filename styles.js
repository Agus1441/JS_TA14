const ingresar = document.getElementById("boton");
const palabra = document.getElementById("valor");
const lista = document.getElementById("lista");

ingresar.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.innerHTML=palabra.value;
    lista.appendChild(li);

    palabra.value="";
});