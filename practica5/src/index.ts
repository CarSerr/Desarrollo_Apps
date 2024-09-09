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
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
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

    setNombre(edad: string): void {
        this.nombre = nombre;
    }
}

const alberto = new Persona('Alberto', 19);
console.log('Nombre:', alberto.nombre,);
console.log('Edad:', alberto.edad);
alberto.nombre = 'Hola';
alberto.edad = 25;

let carlos = new Persona('Carlos', 19);
carlos.setEdad(20);
console.log('Nombre:', carlos.getNombre());
console.log('Edad:', carlos.getEdad());