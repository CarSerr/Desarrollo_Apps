// Enums

enum Color {
    Rojo = 50,
    Verde,
    Azul
}

console.log(Color.Verde);
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
console.log('color1:', color1);

enum Cardinales {
    North = "Norte",
    South = "Sur",
    East = "Este",
    West = "Oeste" 
}

let direccion: Cardinales = Cardinales.North;
console.log('Direccion:', direccion);

enum StatusCode{
    Succes = 200,
    NotFound = 404,
    InternalServerError = 500
}

let statusCode:StatusCode = StatusCode.Succes;
statusCode = StatusCode.NotFound;

console.log('StatusCode:', statusCode);

enum Volumen {
    min = 1,
    medio = 5,
    max = 10
}

let volumen:Volumen = Volumen.medio;
console.log('Volumen:', volumen);

// Reto 

enum EstadoProducto {
    bloqueado = 0,
    favoritos = 1,
    listaDeDeseos = 2
}

let laptop:EstadoProducto = EstadoProducto.bloqueado;
console.log('Estado del producto:', laptop);

let playStation5:EstadoProducto = EstadoProducto.favoritos;
console.log('Estado del producto:', playStation5);

let nintendoSwitch:EstadoProducto = EstadoProducto.listaDeDeseos;
console.log('Estado del producto:', nintendoSwitch);