var rangoInf = Number(prompt("Te voy a pedir que determines un rango numérico, de amplitud mayor a 5  ** (¡Podés usar números negativos!) **   Ingresá el primer valor del rango"));
var rangoSup = Number(prompt("Ahora por favor, ingresá el valor del otro extremo del rango. Recordá que debe tener al menos cinco números de diferencia con el primer valor"));

//Para simplificar las cosas después, me aseguro de que el número mayor sea rangoSup y el menor, rangoInf
if (rangoInf > rangoSup) {
    var aux = rangoSup;
    rangoSup = rangoInf;
    rangoInf = aux;
} 

var diferencia = Math.abs(rangoSup - rangoInf);
console.log(diferencia)

while (diferencia <5) {
    rangoInf = prompt("El rango definido es inferior al requerido. Por favor ingresá el primer valor");
    rangoSup = prompt("Ahora ingresá el segundo valor");
    diferencia = Math.abs(rangoSup - rangoInf);
}

var answer = "s"
do {
var numero = Number(prompt ("Ahora vamos a ver si los números que ingreses están en ese rango. Ingresá un número"));
var rangoOK = false;

if ((numero >= rangoInf) && (numero <= rangoSup)) {
    alert("El número ingresado pertenece al rango elegido");
    rangoOK = true;
} else {
    alert("El número ingresado NO pertenece al rango elegido"); 
}     


if ((rangoOK == true) && (numero % 2 == 0)) {
    alert ("El número ingresado pertenece al rango elegido, y además es PAR");
} else if ((rangoOK == false) && (numero % 2 != 0)) {
    alert ("El número ingresado NO pertenece al rango elegido y además es impar");
}
answer = prompt("¿Querés ingresar otro número? (S / N)");
answer = answer.toUpperCase();

} while(answer==="S")

Swal.fire({
    icon: 'success',
    iconColor: '#FFC900',
	background:  '#FFF9CA',
    title: "Gracias por jugar",
    confirmButtonColor: '#30E3CB',
    text: "¡Que tengas un buen día!"
});
