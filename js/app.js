let boton1 = document.querySelector("#botonTipoDato")
boton1.addEventListener('click', verificarTipoDato)
let nav = document.querySelector("nav")

let cantNums;
let nums;
let rows;
let divisor;
let numsInSection;

function verificarTipoDato(){
  let cualitativo = document.querySelector("#cualitativo").checked;
  let cuantitativo = document.querySelector("#cuantitativo").checked;

  if (cuantitativo){
    nav.innerHTML = `<h2>Ingrese cantidad de datos</h2>` + 
    `<input type="number" id="cant" min="2">` + 
    `<button id="aceptarCantNums">Aceptar</button>`
    ;
    document.querySelector("#aceptarCantNums").addEventListener("click", verificarCantNums)
  } else{

  }
}

function verificarCantNums(){
  let value = document.querySelector("#cant").value
  if(value == "" || value == 0){
    alert("Ingrese un numero valido");
  }else{
    cantNums = value;
    verificarDatos()
  }
}

function verificarDatos(){
  while(i < cantNums){
    nav.innerHTML = `<h1>Ingrese dato numero ${i+1}</h1>` + 
    `<input type="number" id="number">`
    `<button id="aceptarDato">Aceptar</button>`;
    document.querySelector("#aceptarDato").addEventListener("click", function(){
      let dato = document.querySelector("#number").value
      if(dato == ''){
        alert("Ingrese un dato valido")
      } else{
        nums.push(dato);
        i++;
      }
    })
  }
}