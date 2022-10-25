const PI = 3.1416;
var diametro = prompt("Ahora vamos a calcular las dimensiones de un círculo. Por favor, ingresá el diámetro");
var area = PI*(diametro*diametro/4);
var areaRound= area.toFixed(2);
var perimetro = PI*diametro;
console.log("El área del círculo con diámetro = " + diametro + ", el área es: " + areaRound + " y el perímetro es: " + perimetro.toFixed(2));
Swal.fire({
    icon: 'success',
    iconColor: '#90c09a',
    background: '#E3E0DE',
    title: "OK, hice los cálculos: " ,
    confirmButtonColor: '#90c09a',
    text: "Para un círculo con diámetro = " + diametro + ", el área es: " + areaRound + " y el perímetro es: " + perimetro.toFixed(2),
});
