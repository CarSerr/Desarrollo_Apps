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