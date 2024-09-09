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
    constructor(nombre, edad) {
        this.nombre = nombre;
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
    setNombre(edad) {
        this.nombre = nombre;
    }
}
const alberto = new Persona('Alberto', 19);
console.log('Nombre:', alberto.nombre);
console.log('Edad:', alberto.edad);
alberto.nombre = 'Hola';
alberto.edad = 25;
let carlos = new Persona('Carlos', 19);
carlos.setEdad(20);
console.log('Nombre:', carlos.getNombre());
console.log('Edad:', carlos.getEdad());
