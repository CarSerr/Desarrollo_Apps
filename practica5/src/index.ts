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