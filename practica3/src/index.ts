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

let personas:string [] = ['Carlos','Saul','Luis'];
console.log(personas);
console.log(personas[0]);
console.log(personas[3]);
console.log(personas[-1]);
personas.push('Jorge');
console.log(personas);

let numeros:number [] = [1,2,3,4,5];
let numeros2:Array<number> = [6,7,8,9,10];
console.log(numeros,numeros2);

let numerosLi:any = document.getElementById('liNumeros');
for (let i = 0; i < numeros.length; i++) {
    numerosLi.innerHTML += numeros[i];
    if (i < numeros.length - 1) {
        numerosLi.innerHTML += ', ';
    }
}

let numerosLi2:any = document.getElementById('liNumeros2');
for(let i = 0; i < numeros2.length; i++) {
    numerosLi2.innerHTML += numeros2[i];
    if (i < numeros.length -1) {
        numerosLi2.innerHTML += ', ';
    }
}

// Union de tipos

let miArray:(string|number) [] = ['Carlos',45,24,'Saul',19,'Luis',25];
console.log(miArray);
let miArray2:Array<string|number> = ['Mate','Rayo Mcqueen',19,'Hudson Hornet','Franccesco'];
console.log(miArray2);
let miArray3:any [] = [true,10,'Hola',20.5];
console.log(miArray3);
let miArray4:number [] = [];
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
console.log(miArray4);
console.log('Arreglo invertido: ',miArray4.reverse());