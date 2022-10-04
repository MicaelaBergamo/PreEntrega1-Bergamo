//Proyecto Tienda de Arte

let precioTotal = 0

let producto = (prompt("Ingrese el articulo que desea comprar ('Pintura' 'Xilografia' 'Dibujo' 'Ceramica' 'Ropa intervenida'). Para salir de la tienda, ingrese 'salir'."))


if (producto != "salir") 
{ 

do{
let producto2 = producto.toLowerCase(); // para que no importe si escriben el producto en minuscula o mayuscula
//hago una funcion para el resumen de la compra ya que se repite por cada producto
function resumen() {
    alert("Producto seleccionado: "+ producto2 +". El valor total es de $"+ precioTotal)
    
}
switch(producto2) //un switch para que cada producto signifique un precio distinto, y se repite mientras que lo que se ingrese sea distinto a "salir"
{
    case "pintura":
    precioTotal = precioTotal + 6000;
    resumen();
    break;
    case "xilografia":
    precioTotal = precioTotal + 6000;
    resumen();
    break;
    case "dibujo":
    precioTotal = precioTotal + 1000;
    resumen();
    break;
    case "ceramica":
    precioTotal = precioTotal + 4000;
    resumen();
    break;
    case "ropa intervenida":
    precioTotal = precioTotal + 2000;
    resumen();
    break;
    default: alert("Sin stock");
}

producto = (prompt("Ingrese otro articulo que desee comprar. Para salir de la tienda, ingrese 'salir'."))

}while (producto != "salir")

alert("Muchas gracias por su compra! El valor total es de $"+ precioTotal)

//una vez el usuario elige salir, se le pregunta si paga en cuotas o al contado, si es al contado se termina la compra con el ultimo alert, si elige "en cuotas" entra en el switch para que le muestre el precio en cada caso
let pago = (prompt("Desea efectuar su pago en cuotas o al contado? (cuotas/al contado)"))
if (pago == "cuotas"){
    let cuota = parseInt(prompt("En cuantas cuotas desea realizar el pago? (6 o 12)"))
    switch (cuota) {
        case 6:
            alert("Precio de las cuotas: " + precioTotal*1.15/6 + ". Precio final: " + precioTotal*1.15)
            break;
        case 12:
            alert("Precio de las cuotas: " + precioTotal*1.15/12 + ". Precio final: " + precioTotal*1.15)
            break;
    }
}
    else if (pago == "al contado"){
        alert("Muchas gracias por su compra!")
}
}

