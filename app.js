// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Definir un array vacío para almacenar los nombres de amigos
let amigos = [];

// Función para capturar y procesar el nombre del amigo
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");  // Usamos el ID del campo de entrada en tu HTML
  const nombre = input.value.trim();  // Eliminamos espacios vacíos antes y después del nombre

  // Validar si el campo está vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");  // Si está vacío, mostrar un mensaje de error
    return;  // Terminar la función sin agregar nada al array
  }

  // Si el nombre es válido, añadirlo al array de amigos
  amigos.push(nombre);
  
  // Mostrar la lista de amigos en el HTML
  const listaAmigos = document.getElementById("listaAmigos");
  const li = document.createElement("li");
  li.textContent = nombre;  // Colocar el nombre como texto del elemento <li>
  listaAmigos.appendChild(li);  // Agregar el <li> al <ul> de amigos
  
  // Limpiar el campo de entrada
  input.value = "";
}
