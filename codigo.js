// formula ((precio * (100 - descuento)) / 100) 

function calcularPrecio(descuento, precio, alerta, monto) {
    if ((precio > 0) && (descuento > 0)){
        var formula = ((precio * (100 - descuento)) / 100);
        monto.innerHTML = formula;
        alerta.innerHTML = "";
    } 
    else {
        alerta.innerHTML = " * El precio no puede ser igual o menor a 0 <br> ** El descuento no puede ser igual o menor a cero";
    }
}

document.getElementById("calcular").addEventListener("click",descuento);

function descuento(){
    var precio = document.getElementById("precioHtml").value;
    var descuento = document.getElementById("descuentoHtml").value;
    var alerta = document.getElementById("alerta");
    var monto = document.getElementById("montoHtml");
    calcularPrecio(descuento, precio, alerta, monto);
}

function cupones() {
    var descuento = document.getElementById("opcionesHtml").value
    var precio = document.getElementById("priceHtml").value;
    var alerta = document.getElementById("alertaCupon");
    var monto = document.getElementById("resultadoCuponesHtml");
    calcularPrecio(descuento, precio, alerta, monto);
}

/*
function calculos() {
    alert("Hola!");
}*/
