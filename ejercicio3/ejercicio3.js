// Ejercicio 3 - Desarrolla un programa que solicite al usuario ingresar dos números y muestre el mayor de ellos.


let value1 = parseInt(prompt('Ingrese un valor numerico'))
let value2 = parseInt(prompt('Ingrese otro valor numerico'))


if (!isNaN(value1) || !isNaN(value2) ) {
    if (value1 > value2){
        document.getElementById('resultado').innerHTML = value1
    } else if (value2 > value1){
        document.getElementById('resultado').innerHTML = value2
    } else {
        document.getElementById('resultado').innerHTML = 'Son Iguales.'
    }
} else {
    alert('Los Valores ingresados no son numeros')
}