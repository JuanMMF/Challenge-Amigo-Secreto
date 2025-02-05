// Definir un array vacío para almacenar los nombres de amigos
let amigos = [];

// Función para capturar y procesar el nombre del amigo
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");  // Usamos el ID del campo de entrada
  const nombre = input.value.trim();  // Eliminamos espacios vacíos antes y después del nombre

  // Validar si el campo está vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");  // Si está vacío, mostrar un mensaje de error
    return;  // Terminar la función sin agregar nada al array
  }

  // Si el nombre es válido, añadirlo al array de amigos
  amigos.push(nombre);
  
  // Limpiar el campo de entrada
  input.value = "";
  
  // Actualizar la lista de amigos
  mostrarListaAmigos();  // Llamar a la función para mostrar la lista de amigos
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
  // Obtener el elemento <ul> donde se mostrarán los amigos
  const listaAmigos = document.getElementById("listaAmigos");
  
  // Limpiar la lista existente (en caso de que ya haya elementos)
  listaAmigos.innerHTML = "";
  
  // Verificar si hay amigos en el array
  if (amigos.length === 0) {
    listaAmigos.innerHTML = "<li>No hay amigos registrados.</li>"; // Mensaje si el array está vacío
    return;
  }

  // Iterar sobre el array de amigos y agregar un <li> para cada uno
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");  // Crear un nuevo elemento <li>
    li.textContent = amigos[i];  // Asignar el nombre del amigo al <li>
    listaAmigos.appendChild(li);  // Agregar el <li> al <ul> en el HTML
  }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
  // Verificar si hay amigos registrados en el array
  if (amigos.length === 0) {
    alert("No hay amigos registrados para sortear."); // Si no hay amigos, mostrar un mensaje
    return;
  }

  // Generar un índice aleatorio entre 0 y la longitud del array de amigos
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado utilizando el índice aleatorio
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el HTML
  const resultado = document.getElementById("resultado"); // Seleccionar el contenedor de resultados
  resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`; // Mostrar el nombre sorteado
}
