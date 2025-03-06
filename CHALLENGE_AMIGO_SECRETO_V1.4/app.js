// Ingresamos un pequeño mensaje de bienvenida para introducir

alert("Hola! me da gusto que puedas revisar mi proyecto, ha sido desarrollado con los conocimientos que he podido adquirir hasta el momento en el curso e implementando algunas personalizaciones, espero te guste ;)");

// utilizamos los elementos dados en el HTML para ingresar nombres y verla lista
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');

// Arreglo para guardar los nombres (array)
let amigos = [];

// Funcion que nos permite agregar los nombres, además, modifica valores ingresados eliminando espacios (.trim)

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  // Validación: si está vacío, no hacer nada
  if (nombre === '') {
    alert('Por favor, ingresa un nombre');
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el input
  inputAmigo.value = '';

  // Renderizar la lista en el HTML
  renderLista();
}

/**
 * Función para mostrar la lista de amigos en la interfaz.
 */
function renderLista() {
  // Limpiamos el contenido de la lista antes de volver a dibujarla
  listaAmigos.innerHTML = '';

  // Creamos un elemento <li> por cada amigo en el array
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

/**
 * Función para sortear aleatoriamente un amigo.
 */
function sortearAmigo() {
  // Si no hay amigos, no hacer nada
  if (amigos.length === 0) {
    return;
  }

  // Seleccionar un amigo al azar
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar el resultado en un alert
  alert(`Tu amigo secreto es: ${amigoSeleccionado}`);

  // Vaciar la lista después del sorteo
  amigos = [];
  renderLista();
}

// Asignar click al botón "Añadir"
document.querySelector('.button-add').addEventListener('click', agregarAmigo);

// Asignar keydown al input para reconocer la tecla Enter
inputAmigo.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // evitamos que el mensaje salga dos veces
    agregarAmigo();
  }
});

// Asignar click al botón "Sortear"
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
