var answer = "S";
var aprob = 0;
var desaprob = 0;
var nota = Number(prompt("Ingrese la nota del primer alumno"));
while (nota < 0 || nota > 10) {
    nota = Number(prompt("El valor ingresado no es correcto. Por favor ingrese la primera nota"));
} 
var contador = 1;
if (nota >= 4) {
    aprob = 1;
} else if (nota < 4) {
    desaprob = 1;
}

do {
    nuevaNota = Number(prompt("Ingrese la nota del siguiente alumno"));

    while (nuevaNota < 0 || nuevaNota > 10) {
        nuevaNota = Number(prompt("El valor ingresado no es correcto. Por favor ingrese la siguiente nota"));
    } 

    nota = Number(nota + nuevaNota);
    contador ++; 

    if (nuevaNota < 4) { 
            desaprob++;
    }
     else if (nuevaNota >= 4) {
            aprob++;
    } 
 console.log(nuevaNota);
 console.log(nota);
 
answer = prompt("¿Desea ingresar otra nota? (S / N)", "S") 
answer = answer.toUpperCase();   
} while (answer == 'S')

porcentAprob = (100 * (aprob / contador)).toFixed(2);
porcentDesap = (100 * (desaprob / contador)).toFixed(2);
promedioGral = (nota / contador).toFixed(2);

alert ("El porcentaje de aprobados es: " + porcentAprob + " %");
alert("El porcentaje de desaprobados es: " + porcentDesap + " %");
alert("El promedio general es: " + promedioGral);
alert(" El total de alumnos es: " + contador);