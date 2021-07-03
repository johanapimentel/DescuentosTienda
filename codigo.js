// formula ((precio * (100 - descuento)) / 100) 

document.getElementById("Calcular").addEventListener("click",Calcular);

function Calcular(){
    var precio = document.getElementById("precioHtml").value;
    var descuento = document.getElementById("descuentoHtml").value;
    var alerta = document.getElementById("alerta");
    if ((precio > 0) && (descuento > 0)){
        var formula = ((precio * (100 - descuento)) / 100);
        monto = document.getElementById("montoHtml");
        monto.innerHTML = formula;
        alerta.innerHTML = "";
    } 
    else {
        alerta.innerHTML = " * El precio no puede ser igual o menor a 0 <br> ** El descuento no puede ser igual o menor a cero";
    }
}
/*
function calculos() {
    alert("Hola!");
}*/
