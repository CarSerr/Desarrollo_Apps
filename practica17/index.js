const _ = require('lodash');

const array = [1,2,3,4,5,6,7,8,9,10];
console.log(_.chunk(array,2));

let arreglo = ['Juan','','Pedro','Luis','Ana','Maria','Jose','Carlos',''];
console.log(_.chunk(arreglo, 2));
console.log(_.compact(arreglo));

let array1 = ['Superman','Batman','Flash'];
let array2 = ['Thor','Ironman','Spiderman'];
console.log(_.concat(array1,array2));

let array3 = ['El Chavo','El Chapulin Colorado','El Doctor Chapatín'];
let array4 = ['El chavo','El Chompiras','El Botija','El Peterete'];
console.log(_.difference(array3,array4));

let array5 = ['a','b','c','d','e','f','g','h','i','j'];
console.log(_.drop(array5,3));

const numeroAleatorio = _.random(0,100);
console.log(numeroAleatorio);

const saludar = () => {
    console.log('Hola Pablito, ¿Cómo estas?');
}

const saludarPablito = _.once(saludar);
saludarPablito();

const users = [
    { usuario: 'Mayito', edad: 25 },
    { usuario: 'Juanito', edad: 30 },
    { usuario: 'Pedrito', edad: 35 },
    { usuario: 'Pablito', edad: 40 },
    { usuario: 'Carlitos', edad: 45 }
];

const sortedUsers = _.sortBy(users, ['edad'],['des']);
console.log(sortedUsers);
    
const obtieneNumero = () => {
    return _.random(0,100);
}

let result = _.times(5,obtieneNumero);
console.log(result);

// Reto 1
// Crear un arreglo con 100 números aleatorios y mostrar los números pares
// y los números impares en arreglos diferentes

let numeros = _.times(100, () => _.random(1, 100));

let pares = _.filter(numeros, num => num % 2 === 0);
let impares = _.filter(numeros, num => num % 2 !== 0);

console.log("Números pares: ", pares);
console.log("Números impares: ", impares);

//Reto 2
// Crear un arreglo con 100 números aleatorios y mostrar los números primos
// y los números no primos en arreglos diferentes

const esPrimo = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let numerosPrimos = _.times(100, () => _.random(1, 100));

let primos = _.filter(numerosPrimos, esPrimo);
let noPrimos = _.reject(numerosPrimos, esPrimo);

console.log("Números primos: ", primos);
console.log("Números no primos: ", noPrimos);

//Reto 3
// Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra 'A'  
// y los nombres que no empiecen con la letra 'A' en arreglos diferentes

let nombres = ['Ana', 'Juan', 'Andrés', 'Luis', 'Alberto', 'Carla', 'Armando', 'Daniel'];

let nombresConA = _.filter(nombres, nombre => _.startsWith(nombre, 'A'));
let nombresSinA = _.reject(nombres, nombre => _.startsWith(nombre, 'A'));

console.log("Nombres que empiezan con 'A': ", nombresConA);
console.log("Nombres que no empiezan con 'A': ", nombresSinA);