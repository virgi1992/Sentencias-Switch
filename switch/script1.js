/*1.El usuario debe introducir dos valores numéricos por teclado y la apicación debera indicar cual es
el mayor, el primero o el segundo.
Dato: El usuario ingresa 2 , luego ingresa 4 , con un alert debe decir cual es el numero mayor a
ingresar es el 4.*/

let valor1 = prompt("introduce el valor primero");

let valor2 = prompt("introduce el valor segundo");

if (valor1 > valor2) {
  alert(valor1 + " es mayor");
} else if (valor2 > valor1) {
  alert(valor2 + " es mayor");
}
