

let precio = Number (prompt ("ingresa el precio"))
let cupon = prompt ("Ingresa el cupon");
switch (cupon) {
  case "bronce":
    let precioDescuento5 = (precio-(precio*.05))
    document.write("precio original: " + precio);
    document.write(" precio de descuento" + precioDescuento5);
    break;
  case Plata:
    let precioDescuento10 = (precio-(precio*.1))
    document.write("precio original: " + precio);
    document.write(" precio de descuento" + precioDescuento10);
    break;
  case Oro:
    let precioDescuento20 = (precio-(precio*.2))
    document.write("precio original: " + precio);
    document.write(" precio de descuento" + precioDescuento20);
    break;
  case Platino:
    let precioDescuento25 = (precio-(precio*.25))
    document.write("precio original: " + precio);
    document.write(" precio de descuento" + precioDescuento25);
    break;
   default:
        document.write("No es un cupon valido");
        break;
}