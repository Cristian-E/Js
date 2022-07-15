//! Primera Entrega Del Proyecto final 

//el programa se puede iniciar 3 veces
let lista_disponible = 3;


function listaProducto() {

    let canastaProducto = [];

    //creo un maximo de 3 objetos que se almacenaran en el array canastaProducto
    for (let i = 0; i < 3; i++) {

        let pedido = {
            producto: prompt("Ingresa el nombre de un producto (maximo 3)"),
            valor: parseInt(prompt("Ingresa el valor del producto"))
        }

        canastaProducto.push(pedido)
    }

    //almaceno los productos en un nuevo array
    const productos = canastaProducto.map(item => item.producto)

    console.log("los productos son: ", productos)

    //almaceno los valores en un nuevo array
    const valorProductos = canastaProducto.map(item => item.valor)

    console.log("valores: ", valorProductos);

    //suma de los productos
    let sumaTotalProductos = valorProductos.reduce(function (valorAnterior, valorSiguiente) {
        return valorAnterior + valorSiguiente;
    });

    console.log("valor de productos: ", sumaTotalProductos);

    alert("Los productos son " + productos + "y la suma total de su valor es: " + sumaTotalProductos);

    let metodoDePago = prompt("¿Desea abonarlo en efectivo? ").toLowerCase();

    let valorRecargado = sumaTotalProductos * 1.15

    if (metodoDePago === "si") {
        alert("Te esperamos mañana por nuestra sucursal para retirar y abonar su pedido")
        if (--lista_disponible > 0)
            listaProducto()
    }
    else if (metodoDePago === "no") {
        alert(`Abonando en tarjeta tiene un recargo del 15%. el precio final es:  ${valorRecargado}`);
        if (--lista_disponible > 0)
            listaProducto()
    }

}

listaProducto()

//! Primera Entrega Del Proyecto final //