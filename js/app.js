let boton1 = document.querySelector("#botonTipoDato")
boton1.addEventListener('click', verificarTipoDato)
let nav = document.querySelector("nav")

let cantNums;
let nums = [];
let rows;
let divisor;
let dato;
let numsInSection;
let maxNum;
let divs = [];
let possibleRows;

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
  cantNums = document.querySelector("#cant").value
  if(cantNums == "" || cantNums == 0){
    alert("Ingrese un numero valido");
  }else{
    verificarDatos();
  }
}
let i = 0;
function verificarDatos(){
  i = 0;
  while(i < cantNums){
    dato = prompt(`Ingrese dato numero ${i+1}`)

    if(dato == ''){
      alert("Ingrese un dato valido")
    } else{
      nums.push(dato);
      i++;
    }
  }
  findDivisor()
}

function findDivisor(){
  maxNum = nums.reduce((acc, num) => Math.max(acc,num))
  //maxNum has the highest value, so we need to find numbers from 2 to 10 that are divisors of maxNum and put them inot an array
  for(let i = 2; i < 11; i++){
    if(maxNum % i == 0){
      divs.push(i);
    }
  }
  nav.innerHTML = `<h2>Seleccione cantidad de filas a mostrar</h2>`;
  for(let i = 0; i < divs.length; i++){
    nav.innerHTML +=  `<label>${divs[i]}</label>` + 
    `<input type="radio" name="rows" id="row${i}">`;
  }
  nav.innerHTML += `<button>Aceptar</button>`;

  document.querySelector("button").addEventListener("click", setRows);
}

function setRows(){
  possibleRows = document.querySelectorAll("input");
  console.log(possibleRows)
  //ERROR: .filter is not a function
  /////////////
  ///////////////////
  //////////////
  let flag = 0;
  possibleRows.forEach((item) => {
    if(item.checked == true){
      rows = item
      flag = 1;
    }
  });

  if(flag == 0){
    alert("Seleccione una opcion")
  }
  ////////////
  ////////////////
  /////////////
  rows = chosenRow[0];
  alert(`Usted selecciono ${rows} filas a mostrar`);
}
