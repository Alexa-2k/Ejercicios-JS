/*var genero = "";
var edad = 0;
var altura = 0;
var cantHombres = 0;
var cantMujeres = 0;
var cantMujMas25 = 0;
var cantHomMenos18 = 0;
var menorEdad = 1000;
var mayorAltura = 0;
var sumaEdadMuj = 0;
var sumaAlturaHom = 0;
var total = 0;

do {
    genero = prompt("Ingrese el GENERO (H)ombre o (M)ujer: ");
} while (genero.toUpperCase()!="H" && genero.toUpperCase()!="M")

do {
    edad = Number(prompt("Ingrese la EDAD (en años): "));
} while (edad<=0)

do {
    altura = Number(prompt("Ingrese la ALTURA (en cm): "));
} while (altura<=0)

do {

    if (genero.toUpperCase()=="H") {
        cantHombres++;
        sumaAlturaHom += altura;
        if (edad < 18) {
            cantHomMenos18++;
        }
    } else { //es M, solo puede ser H o M
        cantMujeres++;
        sumaEdadMuj += edad;
        if (edad > 25) {
            cantMujMas25++;
        }
    }
    if (altura > mayorAltura) {
        mayorAltura = altura;
    }
    if (edad < menorEdad) {
        menorEdad = edad;
    }
    do {
        genero = prompt("Ingrese el GENERO (H)ombre , (M)ujer o (S)alir: ");
    } while (genero.toUpperCase()!="H" && genero.toUpperCase()!="M" && genero.toUpperCase()!="S")

    if(genero.toUpperCase()=="S") {break;}

    do {
        edad = Number(prompt("Ingrese la EDAD (en años): "));
    } while (edad<=0)
    
    do {
        altura = Number(prompt("Ingrese la ALTURA (en cm): "));
    } while (altura<=0)

} while (genero.toUpperCase()=="H" || genero.toUpperCase()=="M")

if (cantMujeres != 0 && cantHombres != 0) {
    alert("El PORCENTAJE de MUJERES MAYORES DE 25 años es: " + (cantMujMas25/cantMujeres*100) + "%" +
        "\nEl PORCENTAJE de HOMBRES MENORES DE 18 años es: " + (cantHomMenos18/cantHombres*100) + "%" +
        "\nEl PROMEDIO de EDAD de las MUJERES es: " + (sumaEdadMuj/cantMujeres) + " años" +
        "\nEl PROMEDIO de ALTURA de los HOMBRES es: " + (sumaAlturaHom/cantHombres) + "cm" +
        "\nLa MENOR EDAD INGRESADA es: " + menorEdad + " años" +
        "\nLa MAYOR ALTURA INGRESADA es: " + mayorAltura + "cm");
} else if (cantMujeres == 0) {
    alert("NO HAY MUJERES EN LA MUESTRA" +
        "\nEl PORCENTAJE de HOMBRES MENORES DE 18 años es: " + (cantHomMenos18/cantHombres*100) + "%" +
        "\nEl PROMEDIO de ALTURA de los HOMBRES es: " + (sumaAlturaHom/cantHombres) + "cm" +
        "\nLa MENOR EDAD INGRESADA es: " + menorEdad + " años" +
        "\nLa MAYOR ALTURA INGRESADA es: " + mayorAltura + "cm");    
} else if (cantHombres == 0) {
    alert("NO HAY HOMBRES EN LA MUESTRA" +
        "\nEl PORCENTAJE de MUJERES MAYORES DE 25 años es: " + (cantMujMas25/cantMujeres*100) + "%" +
        "\nEl PROMEDIO de EDAD de las MUJERES es: " + (sumaEdadMuj/cantMujeres) + " años" +
       "\nLa MENOR EDAD INGRESADA es: " + menorEdad + " años" +
        "\nLa MAYOR ALTURA INGRESADA es: " + mayorAltura + "cm");
}
*/


    
      
//Defino función carga que voy a llamar en el Dowhile. Crea el objeto persona, carga los datos. 
function carga() {   
    
    //constructor persona
    class persona {
        constructor(sexo, edad, altura) {
            this.sexo = sexo
            this.edad = edad
            this.altura = altura
        }
    }

    //Ingreso sexo
    while (sexo!= "M" && sexo!="H"    ) {
        var sexo=prompt('Ingrese (H)ombre o (M)ujer').toString().toUpperCase()
    }

    //Ingreso edad
    while(!Number.isInteger(edad)){
        var edad=Number(prompt('Ingrese la edad de la persona'))
    }
    //Ingreso altura
    while(!Number.isFinite(altura)){
        var altura=Number(prompt('Ingrese la altura de la persona'))

    }
    //Creo nuevo elemento como los datos extraidos
    nuevo= new persona(sexo,edad,altura) 

    //Funcion que corre 

}
        
//Creo el arreglo Datos para ingresar los datos 
var datos = []

do{
    
    carga()
    datos.push(nuevo)
    //console.log(datos)
    var continua=prompt('Desea cargar una persona más?','SI')
    

} while(continua==='SI')

var mujeres=datos.filter((datomuj) => (datomuj.sexo =='M'))
var hombres=datos.filter((datohom) => (datohom.sexo =='H'))

var menorEdad=datos.reduce((a,b) => Math.min(a,b.edad), 999)
var mayorAltura=datos.reduce((a,b) => Math.max(a,b.altura), 0)

if (mujeres.length != 0 && hombres.length != 0) {

    var muj25=(datos.filter((datom) => (datom.sexo==='M',datom.edad>25)).length) / mujeres.length*100
    var hom18=(datos.filter((datoh) => (datoh.sexo==='H',datoh.edad<18)).length) / hombres.length*100
    var proedmu=mujeres.reduce((a,b) => a+b.edad, 0) / mujeres.length
    var proalthom=hombres.reduce((a,b) => a+b.altura, 0) / hombres.length
    
    alert("El PORCENTAJE de MUJERES MAYORES DE 25 años es: " + muj25 + "%" +
        "\nEl PORCENTAJE de HOMBRES MENORES DE 18 años es: " + hom18 + "%" +
        "\nEl PROMEDIO de EDAD de las MUJERES es: " + proedmu + " años" +
        "\nEl PROMEDIO de ALTURA de los HOMBRES es: " + proalthom + "cm" +
        "\nLa MENOR EDAD INGRESADA es: " + menorEdad + " años" +
        "\nLa MAYOR ALTURA INGRESADA es: " + mayorAltura + "cm");
} else if (mujeres.length == 0) {

    var hom18=(datos.filter((datoh) => (datoh.sexo==='H',datoh.edad<18)).length) / hombres.length*100
    var proalthom=hombres.reduce((a,b) => a+b.altura, 0) / hombres.length
    
    alert("NO HAY MUJERES EN LA MUESTRA" +
        "\nEl PORCENTAJE de HOMBRES MENORES DE 18 años es: " + hom18 + "%" +
        "\nEl PROMEDIO de ALTURA de los HOMBRES es: " + proalthom + "cm" +
        "\nLa MENOR EDAD INGRESADA es: " + menorEdad + " años" +
        "\nLa MAYOR ALTURA INGRESADA es: " + mayorAltura + "cm");    
} else if (hombres.length == 0) {

    var muj25=(datos.filter((datom) => (datom.sexo==='M',datom.edad>25)).length) / mujeres.length*100
    var proedmu=mujeres.reduce((a,b) => a+b.edad, 0) / mujeres.length

    alert("NO HAY HOMBRES EN LA MUESTRA" +
        "\nEl PORCENTAJE de MUJERES MAYORES DE 25 años es: " + muj25 + "%" +
        "\nEl PROMEDIO de EDAD de las MUJERES es: " + proedmu + " años" +
       "\nLa MENOR EDAD INGRESADA es: " + menorEdad + " años" +
        "\nLa MAYOR ALTURA INGRESADA es: " + mayorAltura + "cm");
}
