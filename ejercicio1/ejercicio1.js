// Ejercicio 1 -  Escribe un programa que pida al usuario su edad y luego muestre un mensaje indicando si es mayor de edad o no.

let edad = parseInt(prompt("ingrese su edad: "))


if (!isNaN(edad)){
    if (edad >= 18) { 
        document.getElementById('resultado').innerHTML= 'Es Mayor';
    } else {
        document.getElementById('resultado').innerHTML= 'Es Menor de edad'
    }
} else {
    alert("El valor ingresado no es un numero.")
}