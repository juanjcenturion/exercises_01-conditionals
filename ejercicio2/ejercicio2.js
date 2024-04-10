// Ejercicio 2 - Crea un programa que pida al usuario ingresar un número y luego determine si es positivo, negativo o cero.

let value = parseInt(prompt('ingrese un numero para determinar si es positivo, negativo o cero: '));

if (!isNaN(value)){
    if (value > 0 ) {
        document.getElementById('resultado').innerHTML = 'Es positivo';
    } else if (value < 0) {
        document.getElementById('resultado').innerHTML = 'Es negativo';
    } else {
        document.getElementById('resultado').innerHTML = 'Es cero';
    }
} else {
    alert('No es un numero el valor ingresado.')
}