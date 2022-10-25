var numero = Number(prompt("Ingresá un número. Vamos a ver si es múltiplo de 3, de 5, de ambos o de ninguno"));
var mult3 = false;
var mult5 = false;

if (numero % 3 == 0) { 
       mult3 = true;
} 

if (numero% 5 == 0) {
        mult5 = true;
}

if ((mult3 == true) && (mult5 == true)) {
    alert ("El número ingresado es múltiplo de 3 y de 5")
} else if ((mult3 == true) && (mult5 == false)) {
    alert("El número ingresado es múltiplo de 3, pero no de 5")
} else if((mult3 == false) && (mult5 == true)) {
    alert("El número ingresado es múltiplo de 5, pero no de 3")
} else if ((mult3 == false) && (mult5 == false)) {
    alert("El número ingresado no es múltiplo de 3 ni de 5")
}
