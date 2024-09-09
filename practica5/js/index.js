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
