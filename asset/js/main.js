
//! Trabajo 2 

const nombre = prompt("Ingresa tu nombre")

let precio = 0

alert("Hola " + nombre + " Bienvenido a Kitito")

let modeloCelular = prompt("Por favor ingresa tu modelo samsung = 1, iphone = 2, motorola = 3")

while (modeloCelular != 1 && modeloCelular != 2  && modeloCelular != 3) {
    alert("El modelo no está disponible")
    modeloCelular = prompt("Por favor ingresa tu modelo samsung = 1, iphone = 2, motorola = 3")
}

function mostrar (){
    if (modeloCelular == 1) {
    precio = 900
    alert ("Su precio es de: " + precio)

}else if(modeloCelular == 2){
    precio = 1000
    alert("Su precio es de: " + precio)

}else(modeloCelular == 3)
    precio = 800
    alert ("Su precio es de " + precio)
}

//! Fin de Trabajo 2

