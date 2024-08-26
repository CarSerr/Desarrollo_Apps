let normal2:any = 'hola';
normal2 = 10;
normal2 = true;

console.log(normal2);

let value:any;
console.log(value); 

value = true;
value = 10;
value = 'hola';
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);

let valor:unknown;
console.log("Tipo unknow:", valor);

const edad:number = 18;
console.log('Edad:',edad);
console.log('Edad: ' + edad);

const sueldo:number = 1.234;
const total:number = Number('1234'); //cast
console.log('Sueldo:', sueldo);
console.log('Total:', total);

const personaje:string = "El chavo";
const personaje2:string = 'Don Ranom';
const personaje3:string = `Profesor Jirafales y ${personaje}`;
console.log(personaje3);

const heroe:string = "DeadPool's House";
console.log(heroe);
console.log(heroe.toUpperCase()); // Lo cambia a mayusculas 

let vengador:any;
vengador = 'Dr. Strange';
console.log(vengador.charAt(0));
console.log(vengador.charAt(4));
vengador = 150.55;
console.log(vengador.toFixed(1)); // Redondea el número y se puede seleccionar el número de decimales
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));