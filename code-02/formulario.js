var formulario = document.getElementsByClassName("formulario")[0]; // se obtiene los datos por medio de la búsqueda de clase asignada
console.log(formulario);

formulario.addEventListener( 'submit', function(e) {
// se añade EventListener y onsubmit cambia a submit
  e.preventDefault(); //se añade Default
  
  var n = formulario.elements[0]; // se añade punto y coma
  var inputE = formulario.elements[1]; // se añade punto y coma, se añade input 
  var na = formulario.elements[2]; // se añade punto y coma

  var nombre = n.value;
  var edad = inputE.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    inputE.classList.add("error"); //se anade input
  }

  if (nombre.length > 0 
    && edad > 18 
      && edad < 120 ) {
    agregarInvitado(nombre, edad, nacionalidad);
    }
});

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
// se añaden punto y coma al terminar el string
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //se cambia added a add
lista.appendChild(elementoLista);


var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}