let boton1 = document.querySelector("#botonTipoDato");
boton1.addEventListener("click", verificarTipoDato);
let nav = document.querySelector("nav");

let cantNums;
let nums = [];
let rows;
let divisor;
let dato;
let numsInSection = [];
let maxNum;
let divs = [];
let possibleRows;

function verificarTipoDato() {
  let cualitativo = document.querySelector("#cualitativo").checked;
  let cuantitativo = document.querySelector("#cuantitativo").checked;

  if (cuantitativo) {
    nav.innerHTML =
      `<h2>Ingrese cantidad de datos</h2>` +
      `<input type="number" id="cant" min="2">` +
      `<button id="aceptarCantNums">Aceptar</button>`;
    document
      .querySelector("#aceptarCantNums")
      .addEventListener("click", verificarCantNums);
  } else if (cuantitativo && cualitativo == false) {
    alert("Seleccione una opcion");
  } else {
  }
}

function verificarCantNums() {
  cantNums = document.querySelector("#cant").value;
  if (cantNums == "" || cantNums == 0) {
    alert("Ingrese un numero valido");
  } else {
    verificarDatos();
  }
}
let i = 0;
function verificarDatos() {
  i = 0;
  while (i < cantNums) {
    dato = prompt(`Ingrese dato numero ${i + 1}`);

    if (dato == "") {
      alert("Ingrese un dato valido");
    } else {
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
      let pusheado = nums.push(dato);
      console.log(pusheado)
      i++;
    }
  }
  findDivisor();
}

function findDivisor() {
  maxNum = nums.reduce((acc, num) => Math.max(acc, num));
  //maxNum has the highest value, so we need to find numbers from 2 to 10 that are divisors of maxNum and put them inot an array
  for (let i = 2; i < 11; i++) {
    if (maxNum % i == 0) {
      divs.push(i);
    }
  }
  nav.innerHTML = `<h2>Seleccione cantidad de filas a mostrar</h2>`;
  for (let i = 0; i < divs.length; i++) {
    nav.innerHTML +=
      `<label>${divs[i]}</label>` +
      `<input type="radio" name="rows" value=${divs[i]}><br>`;
  }
  nav.innerHTML += `<button>Aceptar</button>`;

  document.querySelector("button").addEventListener("click", setRows);
}

function setRows() {
  possibleRows = document.querySelectorAll("input");
  let arr = Array.from(possibleRows);
  arr = arr.filter((item) => item.checked == true);
  if (arr[0] == undefined) {
    alert("Seleccione una opción");
  } else {
    divisor = maxNum / arr[0].value;
    showTable();
  }
}

function showTable() {
  nav.innerHTML =
    `<table class="table table-bordered">` +
    `<thead>` +
    `<tr>` +
    `<th>Dato</th>` +
    `<th>Frec. Absoluta</th>` +
    `<th>Frec. Acumulada</th>` +
    `<th>Frec. Relativa</th>` +
    `<th>Frec. Relativa Acumulada</th>` +
    `</tr>` +
    `</thead>` +
    `<tbody>` +
    `</tbody>` +
    `</table>`;

  let content = document.querySelector("tbody");
  let acum;
  for (let i = 0, j = 0; i < maxNum; i += divisor, j++) {
    content.innerHTML += `<tr>` + `<th>[${i} - ${i + divisor})</th>`;
    numsInSection.push(nums.filter(
      num => num >= i && num < (i + divisor)
    ).length);
    console.log(numsInSection);
    acum += numsInSection[j];
    content.innerHTML +=
      `<td>${numsInSection[j]}</td>` +
      `<td>${acum}</td>` +
      `<td>${numsInSection[j] / cantNums}</td>` +
      `<td>${acum / cantNums}</td>` +
      `</tr>`;
  }
}
