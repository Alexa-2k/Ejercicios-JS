var numero = Number(prompt("Ingresá un número, sin decimales"));
var resto = numero % 2; 

if (numero ===0) {
    alert("El número ingresado es CERO");
} else if (numero!=0 && resto==0) {
     alert("El número ingresado es PAR"); 
} else if (numero!=0 && resto!=0) {
     alert("El número ingresado es IMPAR");
}


// Se le solicita al usuario que ingrese un número. Realice un programa para informar si
// el número es cero, par o impar.