// Ejercicio 5 //

var empleado = prompt("Ahora vamos a calcular el salario considerando la antigüedad. Ingresa el nombre y apellido del empleado")
var hora = Number(prompt("por favor ingresá el valor/hora de " + empleado));
var cantidadHoras = Number(prompt("ingresá la cantidad de horas trabajadas en el mes"));
var antig = Number(prompt("¿Cuántos años de antigüedad tiene " + empleado + "?"));
var salario = (hora*cantidadHoras)*(1 + 0.15*antig);
console.log(salario);
salario = salario.toFixed(2);
alert ("El sueldo mensual de " + empleado + " será: $ " + salario); 
