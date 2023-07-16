/*2.El usuario debe entrar un numero y su cuadrado.
Si es correcto el script dira que es cierto sino dira que se produjo un error.
Dato: teclea 3 y 9 el resultado es correcto, si teclea 3 y 8 dira error.*/

let numero = prompt("introduce numero");

let cuadrado = prompt("introduce su cuadrado");

if (cuadrado == numero * numero) {
  alert("correcto");
} else {
  alert("Error");
}
