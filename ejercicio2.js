// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
let numeros = [];

for (let i = 0; i < 10; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100); 
  numeros.push(numeroAleatorio);
}

console.log(numeros);

// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
let userInput = prompt("Ingresa varias palabras separadas por coma:");
let palabras = userInput.split(",");

console.log(palabras);

// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
let arreglo = [10, 40, 30, 20, 15, 5];

arreglo.sort(function (a, b) {
  return a - b;
});

let numeroMenor = arreglo[0];
let numeroMayor = arreglo[arreglo.length - 1];

console.log("Arreglo ordenado de menor a mayor:", arreglo);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);