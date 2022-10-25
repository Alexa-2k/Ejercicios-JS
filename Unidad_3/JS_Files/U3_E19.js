var answer = "S";
var contador = 0;
var sexo = "";
var sexM = 0;
var sexF = 0;
var edad = 0;
var nuevaEdad = 0;
var altura = 0;
var nuevaAltura = 0;
var hombreMenor = 0;
var mujerMayor = 0;
var minEdad = 200;
var maxAlt = 0;


do { 
    contador = contador++;
    sexo = prompt("Sexo de la persona: (F / M)");
    sexo = sexo.toUpperCase();

    nuevaEdad = Number(prompt("Edad de la persona"));
    nuevaAltura = Number(prompt("Altura de la persona, en cm"));

    if (nuevaEdad < minEdad) {
        minEdad = nuevaEdad;
        }
    if (nuevaAltura > maxAlt){
        maxAlt = nuevaAltura;
    }

    if (sexo == "M") {
        altura = altura + nuevaAltura;
        sexM++ ;
        if (nuevaEdad <= 17) {
            hombreMenor++;
        }               
    } else if (sexo == "F") {
        edad = edad + nuevaEdad;
        sexF++;
        if (nuevaEdad > 25) {
            mujerMayor ++;
        }
    }

    answer = prompt("Desea agregar los datos de otra persona?");
    answer = answer.toUpperCase();
} while (answer == "S") 

alert ("El porcentaje de varones menores de 18 años es: " + (100 * (hombreMenor / sexM)) + " %");
alert ("El porcentaje de mujeres mayores de 25 años es : " + (100 * (mujerMayor / sexF)) + " %");
alert ("El promedio de edad de las mujeres es: " + (edad / sexF) + " años");
alert ("El promedio de altura de los hombres es: " + (altura / sexM) + " cm");
alert ("La mayor altura ingresada es: " + maxAlt + " cm");
alert ("La menor edad ingresada es: " + minEdad + " años");