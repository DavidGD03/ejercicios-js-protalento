// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
let numero = parseInt(prompt("Ingresa un número:"));

console.log("Los múltiplos de 5 hasta el número", numero, "son:");

for (let i = 1; i <= numero; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

console.log("Los números del 1 al 50:");

for (let i = 1; i <= 50; i++) {
  if (i === numero1 || i === numero2) {
    console.log(i, "¡Lotería!");
  } else {
    console.log(i);
  }
}

// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
let numeros = [];

while (true) {
  let numero = parseInt(prompt("Ingresa un número (o ingresa 0 para terminar):"));
  
  if (numero === 0) {
    break;
  } else if (!isNaN(numero)) {
    numeros.push(numero);
  }
}

console.log("Números capturados:", numeros);

// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
let palabras = [];

while (true) {
  let entrada = prompt("Ingresa una palabra (deja en blanco para terminar):");
  
  if (entrada === "") {
    break;
  } else {
    palabras.push(entrada);
  }
}

let resultado = palabras.join(" ");

console.log("Palabras capturadas:", resultado);

// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
while (true) {
    let diaSemana = prompt("Ingresa un día de la semana:");
  
    switch (diaSemana.toLowerCase()) {
      case "lunes":
        alert("Hoy es lunes, intenta no estar triste xd");
        break;
      case "martes":
        alert("Hoy es martes, avanzamos un poco");
        break;
      case "miércoles":
      case "miercoles":
        alert("Hoy es miércoles, hay menú especial en el trabajo");
        break;
      case "jueves":
        alert("Hoy es jueves, ya casi viernes");
        break;
      case "viernes":
        alert("Hoy es viernes, se viene el fin de semana");
        break;
      case "sábado":
      case "sabado":
        alert("Hoy es sábado, hora de descansar y hacer tareas del bootcamp");
        break;
      case "domingo":
        alert("Ve a descansar.");
        return;
      default:
        alert("No ingresaste un día válido.");
    }
  }  