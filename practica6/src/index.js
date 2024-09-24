"use strict";
// Enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 50] = "Rojo";
    Color[Color["Verde"] = 51] = "Verde";
    Color[Color["Azul"] = 52] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
console.log('color1:', color1);
var Cardinales;
(function (Cardinales) {
    Cardinales["North"] = "Norte";
    Cardinales["South"] = "Sur";
    Cardinales["East"] = "Este";
    Cardinales["West"] = "Oeste";
})(Cardinales || (Cardinales = {}));
let direccion = Cardinales.North;
console.log('Direccion:', direccion);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Succes"] = 200] = "Succes";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
let statusCode = StatusCode.Succes;
statusCode = StatusCode.NotFound;
console.log('StatusCode:', statusCode);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let volumen = Volumen.medio;
console.log('Volumen:', volumen);
// Reto 
var EstadoProducto;
(function (EstadoProducto) {
    EstadoProducto[EstadoProducto["bloqueado"] = 0] = "bloqueado";
    EstadoProducto[EstadoProducto["favoritos"] = 1] = "favoritos";
    EstadoProducto[EstadoProducto["listaDeDeseos"] = 2] = "listaDeDeseos";
})(EstadoProducto || (EstadoProducto = {}));
let laptop = EstadoProducto.bloqueado;
console.log('Estado del producto:', laptop);
let playStation5 = EstadoProducto.favoritos;
console.log('Estado del producto:', playStation5);
let nintendoSwitch = EstadoProducto.listaDeDeseos;
console.log('Estado del producto:', nintendoSwitch);
