var lado1 = Number(prompt("Ingresá la medida del primer lado"));
var lado2 = Number(prompt("Ingresá la medida del segundo lado"));
var lado3 = Number(prompt("Ingresá la medida del tercer lado"));

if ((lado1 == lado2) && (lado1 == lado3)) {
    alert("El triángulo es equilátero");

} else if ((lado1 == lado2) || (lado2 == lado3) || (lado1 == lado3)){
    alert("El triángulo es isósceles")
} else {
    alert("El triángulo es escaleno")
    
}
