"use strict";
// Tuplas
let tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let ourTuple = ['Lucas', 23, true];
console.log('Nombre: ', ourTuple[0]);
console.log('Edad: ', ourTuple[1]);
// Ternario
let estadocivil = (ourTuple[2]) ? 'Casado' : 'Soltero';
console.log('Estado civil: ', estadocivil);
let ourTuple2 = [23, false, 'Lucas'];
ourTuple2 = [25, true, 'Lucas'];
ourTuple2[0] = 27;
console.log(ourTuple2);
const ourReadonlyTuple = [5, true, 'Diego'];
// urReadonlyTuple.push('Cadena'); // Error
// ourReadonlyTuple[0]=30;
console.log('Nombre: ', ourReadonlyTuple[2]);
const graph = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);
// Desestructuracion de variables
const person = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 10
};
// let nombrePerson: string = person.firstName;
let { firstName, lastName, age = 25 } = person;
console.log(firstName, lastName, age);
// Usando TS y desestructuración de variables hay que generar la serie de Fibonnacci con hasta 100 veces
// Graficar los resultados en pantalla
function fibonacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
const n = 25;
const fibonnacci = fibonacciSeries(n);
console.log(fibonnacci);
