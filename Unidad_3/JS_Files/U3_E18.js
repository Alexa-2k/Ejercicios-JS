var numero = Number(prompt("Ingresá un número"));
var contador = 1;
var maximo = numero;
var minimo = numero;
var suma = numero;
var answer = "S";

do {
    numero = Number(prompt("Ingresá un nuevo número"));
    contador++;
    suma = suma + numero;
    if (numero > maximo) {
        maximo = numero;
    }
    if (numero < minimo) {
        minimo = numero;
    }

answer = prompt("¿Querés ingresar otro número? (S / N)", "S" );
answer = answer.toUpperCase();    
} while (answer == "S")

alert("La sumatoria de los valores ingresados es: " + suma);
alert("El mínimo valor ingresado es: " + minimo);
alert("El máximo valor ingresado es: " + maximo);