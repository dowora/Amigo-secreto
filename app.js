// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

function agregarAmigo() {
    let input = document.getElementById('amigo'); // obtener elemento por id
    let nombre = input.value; // ingresar texto
    console.log(nombre); 
    if (input.value === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }
    amigos.push(nombre);
    input.value = ''; // limpia el campo
    console.log(amigos); 
    mostrarAmigos(amigos); // llamar a la funcion (estuve una hora intentando descifrar porque no se mostraba)
} 

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpia lista 
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
} 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    } else if (amigos.length > 0) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = ''; // limpia el resultado
        let resultadoSorteo = Math.floor(Math.random()*amigos.length); // genera un número aleatorio
        console.log(resultadoSorteo);
        let nombreAmigo = amigos[resultadoSorteo]; // obtiene el nombre del amigo sorteado
        resultado.textContent = `El amigo secreto es: ${nombreAmigo}`; // muestra el resultado
    }
}

function resetear() {
    amigos = []; // reinicia el array de amigos
    mostrarAmigos(); // limpia la lista de amigos
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // limpia el resultado
    let input = document.getElementById('amigo');
    input.value = ''; // limpia el campo de entrada
}