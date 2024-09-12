let miVariable:string = 'Hola mundo';
console.log(miVariable);

const persona = {
    nombre: "John",
    apellido: "Doe",
    edad1: 50
}

let {nombre, apellido, edad1} = persona;
console.log(nombre,' ',apellido);

let miNombre = "Carlos";
let [a1,a2,a3,a4,a5,a6]:string = miNombre;
console.log(a1,a2,a3,a4,a5,a6);

const frutas:string[] = ["platano", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1,fruta2);

let [frutaA,,,frutaB] = frutas;
console.log(frutaA,frutaB);

class Persona {
    nombre: string;
    apellidoP: string;
    apellidoM: string;
    edad: number;

    constructor(nombre: string, apellidoP: string, apellidoM:string, edad: number) {
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.edad = edad;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellidoPaterno(): string {
        return this.apellidoP;
    }

    setApellidoPaterno(apellidoP: string): void {
        this.apellidoP = apellidoP;
    }

    getApellidoMaterno(): string {
        return this.apellidoM;
    }

    setApellidoMaterno(apellidoM: string): void {
        this.apellidoP = apellidoM;
    }
}

const alberto = new Persona('Alberto', 'Velasco', 'Gutierrez', 19);
console.log('Nombre:', alberto.nombre,);
console.log('Edad:', alberto.edad);
alberto.nombre = 'Hola';
alberto.edad = 25;

let carlos = new Persona('Carlos','Serrano','Aguilar', 19);
carlos.setEdad(20);
console.log('Nombre:', carlos.getNombre());
console.log('Apellido Paterno:', carlos.getApellidoPaterno());
console.log('Apellido Materno:', carlos.getApellidoMaterno());
console.log('Edad:', carlos.getEdad());

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }
}

const usuario: User = new UserAccount('Imagine Dragons', 1);

console.log(usuario.name, usuario.id)

class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    mover(distancia: number = 0) {
        console.log(`${this.nombre} se movio ${distancia} mts.`);
    }

    hacerSonido(sonido: string = 'Sin Sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let grillo = new Animal('Grillo');
grillo.mover(5);
grillo.hacerSonido('Priii Priii');

console.log(grillo);

class Perro extends Animal { 
    constructor(nombre: string) {
        super(nombre);
    }

    mover(distancia: number = 5) {
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
    constructor(nombre: string) {
        super(nombre);
    }

    mover(distancia: number = 1) {
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
    private nombre: string;
    private precio: number;
    private categoria: string;

    constructor(nombre: string, precio: number, categoria: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    // Getters
    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    getCategoria(): string {
        return this.categoria;
    }

    // Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setPrecio(precio: number): void {
        this.precio = precio;
    }

    setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    // Método
    aplicarDescuento(descuento: number): number {
        return this.precio - (this.precio * descuento / 100);
    }
}

class Usuario {
    private nombre: string;
    private email: string;
    private direccion: string;

    constructor(nombre: string, email: string, direccion: string) {
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
    }

    // Getters
    getNombre(): string {
        return this.nombre;
    }

    getEmail(): string {
        return this.email;
    }

    getDireccion(): string {
        return this.direccion;
    }

    // Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    // Método
    cambiarDireccion(nuevaDireccion: string): void {
        this.direccion = nuevaDireccion;
    }
}

class Carrito {
    private productos: Producto[];
    private total: number;
    private usuario: Usuario;

    constructor(productos: Producto[], usuario: Usuario) {
        this.productos = productos;
        this.total = this.calcularTotal();
        this.usuario = usuario;
    }

    // Getters
    getProductos(): Producto[] {
        return this.productos;
    }

    getTotal(): number {
        return this.total;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    // Setters
    setProductos(productos: Producto[]): void {
        this.productos = productos;
        this.total = this.calcularTotal();
    }

    setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
    }

    // Método
    calcularTotal(): number {
        return this.productos.reduce((acc, producto) => acc + producto.getPrecio(), 0);
    }
}

class MetodoDePago {
    private tipo: string;
    private nombreTitular: string;
    private numeroTarjeta: string;

    constructor(tipo: string, nombreTitular: string, numeroTarjeta: string) {
        this.tipo = tipo;
        this.nombreTitular = nombreTitular;
        this.numeroTarjeta = numeroTarjeta;
    }

    // Getters
    getTipo(): string {
        return this.tipo;
    }

    getNombreTitular(): string {
        return this.nombreTitular;
    }

    getNumeroTarjeta(): string {
        return this.numeroTarjeta;
    }

    // Setters
    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    setNombreTitular(nombreTitular: string): void {
        this.nombreTitular = nombreTitular;
    }

    setNumeroTarjeta(numeroTarjeta: string): void {
        this.numeroTarjeta = numeroTarjeta;
    }

    // Método
    validarPago(): boolean {
        // Aquí iría la lógica para validar el pago
        return this.numeroTarjeta.length === 16;
    }
}

class Orden {
    private carrito: Carrito;
    private metodoDePago: MetodoDePago;
    private estado: string;

    constructor(carrito: Carrito, metodoDePago: MetodoDePago, estado: string) {
        this.carrito = carrito;
        this.metodoDePago = metodoDePago;
        this.estado = estado;
    }

    // Getters
    getCarrito(): Carrito {
        return this.carrito;
    }

    getMetodoDePago(): MetodoDePago {
        return this.metodoDePago;
    }

    getEstado(): string {
        return this.estado;
    }

    // Setters
    setCarrito(carrito: Carrito): void {
        this.carrito = carrito;
    }

    setMetodoDePago(metodoDePago: MetodoDePago): void {
        this.metodoDePago = metodoDePago;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    // Método
    confirmarOrden(): string {
        if (this.metodoDePago.validarPago()) {
            this.estado = "Confirmada";
            return "Orden confirmada";
        } else {
            return "Error en el pago";
        }
    }
}
