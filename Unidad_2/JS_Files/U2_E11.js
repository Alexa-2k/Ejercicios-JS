var numero1= Number(prompt("Por favor ingresá el primer número"));
var numero2 = Number(prompt("Ahora ingresá el segundo número"));
var operacion = prompt("¿Qué operación querés realizar? Ingresá: + , - , * o /");
var resultado = 0;


switch (operacion) {
   case '+' : resultado = numero1 + numero2;
              alert ("El resultado de la suma es " + resultado);
              break;   
   case '-' : resultado = numero1 - numero2;
              alert ("El resultado de la resta es " + resultado);
              break;
   case '*' : resultado = numero1 * numero2;
              alert ("El resultado del producto es " + resultado);
              break;
   case '/' : resultado = numero1 / numero2;  
              alert ("El resultado de la división es " + resultado.toFixed(2));
              break;
   default : alert ("La operación solicitada no es válida");
  }
