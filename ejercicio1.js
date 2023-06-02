// EJERCICIO 1: Solicitar al usuario que responda a la pregunta ("¿Eres bellísimo/a?"), en caso de contestar sí, responder "Ciertamente", en caso de contestar no, responder: "No te creo".

let respuesta = prompt("¿Eres bellísimo/a?");

if (respuesta.toLowerCase() === "sí") {
  console.log("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
  console.log("No te creo");
}

// EJERCICIO 2: Solicitar al usuario un número y determinar si es divisible entre dos o no. Mostrar al usuario un mensaje de "x número es divisible entre 2" o "x número no es divisible entre 2".

let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  console.log(numero + " es divisible entre 2");
} else {
  console.log(numero + " no es divisible entre 2");
}


// EJERCICIO 3: Crear un programa que determine si un número introducido en un prompt es par o no, la respuesta se mostrará en un alert.

let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  alert(numero + " es un número par");
} else {
  alert(numero + " no es un número par");
}


// EJERCICIO 4: Solicitar al usuario un número de cliente. Si el número es 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando".

let numeroCliente = parseInt(prompt("Ingrese su número de cliente:"));

if (numeroCliente === 1000) {
  console.log("Ganaste un premio");
} else {
  console.log("Lo sentimos, sigue participando");
}


// EJERCICIO 5: Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (numero1 < numero2) {
  console.log(numero1 + " es menor que " + numero2);
} else {
  console.log(numero2 + " es menor que " + numero1);
}


// EJERCICIO 6: Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1 + " es el número mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(numero2 + " es el número mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log(numero3 + " es el número mayor");
} else {
  console.log("Hay dos números iguales");
}


// EJERCICIO 7: Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
// Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diaSemana = prompt("Ingrese un día de la semana:");

if (diaSemana.toLowerCase() === "lunes") {
  console.log("Hoy es lunes");
} else if (diaSemana.toLowerCase() === "viernes") {
  console.log("Hoy es viernes");
} else if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") {
  console.log("Es fin de semana");
} else {
  console.log("No es ni lunes, ni viernes, ni fin de semana");
}


// EJERCICIO 8: Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número esté efectivamente en ese rango, si no lo está, imprimir un mensaje de error. 
// Si lo está, imprimir "reprobado" si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien" si es 9, y "excelente" si es 10.

let calificacion = parseInt(prompt("Ingrese una calificación (entre 1 y 10):"));

if (calificacion >= 1 && calificacion <= 10) {
  if (calificacion < 6) {
    console.log("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
  } else if (calificacion === 9) {
    console.log("Bien");
  } else {
    console.log("Excelente");
  }
} else {
  console.log("La calificación ingresada está fuera de rango");
}


// EJERCICIO 9: Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.

let costoHelado = 50;
let topping = prompt("Ingrese el topping que desea (oreo, KitKat, brownie):");
let costoTopping = 0;

switch (topping.toLowerCase()) {
  case "oreo":
    costoTopping = 10;
    break;
  case "kitkat":
    costoTopping = 15;
    break;
  case "brownie":
    costoTopping = 20;
    break;
  default:
    console.log("No tenemos este topping, lo sentimos.");
    break;
}

if (costoTopping > 0) {
  let costoTotal = costoHelado + costoTopping;
  console.log("El costo total es de " + costoTotal + " COP");
}


// EJERCICIO 10: Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona 
// interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

let opcion = prompt("Seleccione una opción (Course, Carrera, Master):");
let costoMensual = 0;

switch (opcion.toLowerCase()) {
  case "course":
    costoMensual = 4999;
    break;
  case "carrera":
    costoMensual = 3999;
    break;
  case "master":
    costoMensual = 2999;
    break;
  default:
    console.log("Opción no válida");
    break;
}

if (costoMensual > 0) {
  let beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua):");
  let descuento = 0;

  switch (beca.toLowerCase()) {
    case "facebook":
      descuento = 0.2;
      break;
    case "google":
      descuento = 0.15;
      break;
    case "jesua":
      descuento = 0.5;
      break;
  }

  let precioDescuento = costoMensual - (costoMensual * descuento);
  let duracion = 0;

  switch (opcion.toLowerCase()) {
    case "course":
      duracion = 2;
      break;
    case "carrera":
      duracion = 6;
      break;
    case "master":
      duracion = 12;
      break;
  }

  let costoTotal = precioDescuento * duracion;

  console.log("El costo mensual con descuento es de " + precioDescuento + " COP");
  console.log("El costo total por el curso elegido es de " + costoTotal + " COP");
}


// EJERCICIO 11: Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

let vehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");
let precioKilometro = 0;
let extraLitros = 0;

switch (vehiculo.toLowerCase()) {
  case "coche":
    precioKilometro = 0.20;
    break;
  case "moto":
    precioKilometro = 0.10;
    break;
  case "autobús":
    precioKilometro = 0.5;
    break;
  default:
    console.log("Tipo de vehículo no válido");
    break;
}

if (precioKilometro > 0) {
  let distancia = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));
  let litrosConsumidos = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));

  if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
    extraLitros = 5;
  } else if (litrosConsumidos > 100) {
    extraLitros = 10;
  }

  let totalPagar = (precioKilometro * distancia) + extraLitros;
  console.log("El total a pagar es de " + totalPagar + " COP");
}
