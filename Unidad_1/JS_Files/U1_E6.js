// 6. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le 
// solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
// años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro
// vendido.
// Realice un programa para calcular e informar el sueldo mensual del empleado,
// teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido,
// un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual
// al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e
// informar el valor promedio de la hora del empleado


var empleado = prompt("Ahora vamos a calcular el salario considerando la antigüedad y comisiones. Ingresa el nombre y apellido del empleado")
var hora = Number(prompt("por favor ingresá el valor/hora de " + empleado));
var cantidadHoras = Number(prompt("ingresá la cantidad de horas trabajadas en el mes"));
var antig = Number(prompt("¿Cuántos años de antigüedad tiene " + empleado + "?"));
var seguroMayor = Number(prompt("¿Cuál es el monto del seguro más alto que vendió este mes?"));
var seguros = Number(prompt("¿Cuál fue la cantidad total de seguros vendidos en el mes?"));

var salario = (hora*cantidadHoras)*(1 + 0.15*antig + 0.25*seguros) + 0.5*seguroMayor ;
var horaPromedio = (salario / cantidadHoras);
salario = salario.toFixed(2);
horaPromedio = horaPromedio.toFixed(2);
 
console.log(salario);
console.log(horaPromedio);
alert ("El sueldo mensual de " + empleado + " será de: $ " + salario); 
alert ("El valor promedio de la hora para " + empleado + " será de: $ " + horaPromedio); 
