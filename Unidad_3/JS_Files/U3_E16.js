// Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice
// un programa para calcular e informar cada operación deseada entre los dos números.
// Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser
// validados
var resultado = 0;
var answer = "S";

do { 
var numero1= prompt("Por favor ingresá el primer número");
var verifica1 = isNaN(numero1);

while (verifica1 == true) {
    numero1= prompt("El valor ingresado no es un número. Por favor ingresá el primer número");
    verifica1 = isNaN(numero1);
} 

var numero2 = prompt("Ahora ingresá el segundo número");
var verifica2 = isNaN(numero2);

while (verifica2 == true) {
    numero2= prompt("El valor ingresado no es un número. Por favor ingresá el segundo número");
    verifica2 = isNaN(numero2);
}

var operacion = prompt("¿Qué operación querés realizar? Ingresá: + , - , * o /");

switch (operacion) {
   case '+' : resultado = parseInt(numero1) + parseInt(numero2);
              alert ("El resultado de la suma es " + resultado);
              break;   
   case '-' : resultado = parseInt(numero1) - parseInt(numero2);
              alert ("El resultado de la resta es " + resultado);
              break;
   case '*' : resultado = parseInt(numero1) * parseInt(numero2);
              alert ("El resultado del producto es " + resultado);
              break;
   case '/' : resultado = parseInt(numero1) / parseInt(numero2);  
              alert ("El resultado de la división es " + resultado.toFixed(2));
              break;
   default : alert ("La operación solicitada no es válida");
  }
  answer = prompt("¿Querés continuar? S/N", "S");
  answer = answer.toUpperCase();
} while (answer === "S"); 

Swal.fire({
    icon: 'success',
    iconColor: '#6663ff',
    //#30E3CB
    background: '#B8E8FC',
    title: "Gracias por jugar",
    confirmButtonColor: '#30E3CB',
    text: "¡Que tengas un buen día!"
});
