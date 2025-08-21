// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array para almacenar los amigos secretos




function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    input.value = ''; // Limpia el campo de texto
    console.log(amigos); // Muestra el array actualizado en consola
    mostrarAmigos();
}

function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    // 2. Limpiar la lista existente
    lista.innerHTML = "";
    // 3. Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar elementos a la lista
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
