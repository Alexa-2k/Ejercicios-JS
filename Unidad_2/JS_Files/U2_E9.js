var letra = prompt("Por favor, ingresá una letra");
letra = letra.toUpperCase();

if (letra == "A" || letra == "E" || letra == "I"|| letra == "O" || letra == "U") {
    alert ("La letra ingresada es una vocal");
} else {
    alert("No ingresaste una vocal");
}
