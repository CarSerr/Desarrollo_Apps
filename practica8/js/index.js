"use strict";
console.log("Hola codespaces");
const nuevoHeroe = 'Spider Man';
function returnName() {
    return nuevoHeroe;
}
console.log(returnName());
const heroeNombre = returnName();
console.log(heroeNombre);
let otraVariable = returnName();
console.log('De que tipo es:', typeof otraVariable);
// Parametros obligatorios en funciones
const nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};
const tuNombre = nombreCompleto("Carlos", "Serrano");
console.log(tuNombre);
// Parametros opcionales en funciones
const nombreCompleto2 = (nombre, apellido) => {
    return `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`;
};
const tuNombre2 = nombreCompleto2("Carlos");
console.log(tuNombre2);
const nombreCompleto3 = (nombre, apellido, mayusculas = false) => {
    if (mayusculas) {
        return `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`.toUpperCase();
    }
    else {
        return `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`;
    }
};
const tuNombre3 = nombreCompleto3("Carlos", "Serrano", true);
console.log(tuNombre3);
const nombreCompleto4 = (nombre, apellido, mayusculas = false) => {
    return mayusculas ? `${nombre || ' no se proporciono nombre '} ${apellido || ' no se proporciono apellido '}`.toUpperCase() : `${nombre || ' no se proporciono nombre '} ${apellido || ' no se proporciono apellido'}`;
};
const tuNombre4 = nombreCompleto4("Carlos", "Serrano", true);
console.log(tuNombre4);
// operador REST
const nombreCompleto5 = (nombre, ...restoApellidos) => {
    return `${nombre} ...Resto ${restoApellidos.join(' ')}`;
};
const superman = nombreCompleto5('Clark', 'Kent', 'Oswald', 'Smith');
console.log(superman);
