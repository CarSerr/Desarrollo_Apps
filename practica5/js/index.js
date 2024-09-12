"use strict";
let miVariable = 'Hola mundo';
console.log(miVariable);
const persona = {
    nombre: "John",
    apellido: "Doe",
    edad1: 50
};
let { nombre, apellido, edad1 } = persona;
console.log(nombre, ' ', apellido);
let miNombre = "Carlos";
let [a1, a2, a3, a4, a5, a6] = miNombre;
console.log(a1, a2, a3, a4, a5, a6);
const frutas = ["platano", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, frutaB);
class Persona {
    constructor(nombre, apellidoP, apellidoM, edad) {
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidoPaterno() {
        return this.apellidoP;
    }
    setApellidoPaterno(apellidoP) {
        this.apellidoP = apellidoP;
    }
    getApellidoMaterno() {
        return this.apellidoM;
    }
    setApellidoMaterno(apellidoM) {
        this.apellidoP = apellidoM;
    }
}
const alberto = new Persona('Alberto', 'Velasco', 'Gutierrez', 19);
console.log('Nombre:', alberto.nombre);
console.log('Edad:', alberto.edad);
alberto.nombre = 'Hola';
alberto.edad = 25;
let carlos = new Persona('Carlos', 'Serrano', 'Aguilar', 19);
carlos.setEdad(20);
console.log('Nombre:', carlos.getNombre());
console.log('Apellido Paterno:', carlos.getApellidoPaterno());
console.log('Apellido Materno:', carlos.getApellidoMaterno());
console.log('Edad:', carlos.getEdad());
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
const usuario = new UserAccount('Imagine Dragons', 1);
console.log(usuario.name, usuario.id);
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover(distancia = 0) {
        console.log(`${this.nombre} se movio ${distancia} mts.`);
    }
    hacerSonido(sonido = 'Sin Sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let grillo = new Animal('Grillo');
grillo.mover(5);
grillo.hacerSonido('Priii Priii');
console.log(grillo);
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 5) {
        console.log('Caminando y Corriendo');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Ladrido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const firulais = new Perro('Firulais');
firulais.mover(10);
firulais.hacerSonido("Guau Guau");
class Serpiente extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 1) {
        console.log('Reptando');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Siseo') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const cobra = new Serpiente('Cobra');
cobra.mover(2);
cobra.hacerSonido('Siseo');
// Reto
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    // Getters
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
    getCategoria() {
        return this.categoria;
    }
    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    // Método
    aplicarDescuento(descuento) {
        return this.precio - (this.precio * descuento / 100);
    }
}
class Usuario {
    constructor(nombre, email, direccion) {
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
    }
    // Getters
    getNombre() {
        return this.nombre;
    }
    getEmail() {
        return this.email;
    }
    getDireccion() {
        return this.direccion;
    }
    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEmail(email) {
        this.email = email;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    // Método
    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
}
class Carrito {
    constructor(productos, usuario) {
        this.productos = productos;
        this.total = this.calcularTotal();
        this.usuario = usuario;
    }
    // Getters
    getProductos() {
        return this.productos;
    }
    getTotal() {
        return this.total;
    }
    getUsuario() {
        return this.usuario;
    }
    // Setters
    setProductos(productos) {
        this.productos = productos;
        this.total = this.calcularTotal();
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
    // Método
    calcularTotal() {
        return this.productos.reduce((acc, producto) => acc + producto.getPrecio(), 0);
    }
}
class MetodoDePago {
    constructor(tipo, nombreTitular, numeroTarjeta) {
        this.tipo = tipo;
        this.nombreTitular = nombreTitular;
        this.numeroTarjeta = numeroTarjeta;
    }
    // Getters
    getTipo() {
        return this.tipo;
    }
    getNombreTitular() {
        return this.nombreTitular;
    }
    getNumeroTarjeta() {
        return this.numeroTarjeta;
    }
    // Setters
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setNombreTitular(nombreTitular) {
        this.nombreTitular = nombreTitular;
    }
    setNumeroTarjeta(numeroTarjeta) {
        this.numeroTarjeta = numeroTarjeta;
    }
    // Método
    validarPago() {
        // Aquí iría la lógica para validar el pago
        return this.numeroTarjeta.length === 16;
    }
}
class Orden {
    constructor(carrito, metodoDePago, estado) {
        this.carrito = carrito;
        this.metodoDePago = metodoDePago;
        this.estado = estado;
    }
    // Getters
    getCarrito() {
        return this.carrito;
    }
    getMetodoDePago() {
        return this.metodoDePago;
    }
    getEstado() {
        return this.estado;
    }
    // Setters
    setCarrito(carrito) {
        this.carrito = carrito;
    }
    setMetodoDePago(metodoDePago) {
        this.metodoDePago = metodoDePago;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    // Método
    confirmarOrden() {
        if (this.metodoDePago.validarPago()) {
            this.estado = "Confirmada";
            return "Orden confirmada";
        }
        else {
            return "Error en el pago";
        }
    }
}
