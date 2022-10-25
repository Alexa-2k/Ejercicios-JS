var salario = 0;
var empleado = prompt("Ingrese el nombre del empleado");
var categoria = Number(prompt("Ingrese la categoría del empleado:  1. USD 2000,  2. USD 3000,  3. USD 4000" ));
var horasExtra = 0;

if ((categoria ==1) || (categoria ==3)) { 
    horasExtra = Number(prompt("Ingresa la cantidad de horas extra trabajadas: "));
} 

if ((categoria == 1) && (horasExtra > 20)) {
    salario = 2500;
} else if ((categoria ==1) && (horasExtra <= 20)) {
    salario = 2000;
} 

if (categoria == 2) { 
    salario = 3000;
}

if ((categoria == 3) && (horasExtra > 30)) {
    salario = 5000;
} else if ((categoria == 3) && (horasExtra <= 30)) {
    salario = 4000;
} 

alert ("El salario de " + empleado + " es de " + salario);
if (salario > 4000) {
    alert("El salario de " + empleado +" supera los USD 4000")
}


