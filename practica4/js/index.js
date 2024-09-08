// Tuplas
var tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
var ourTuple = ['Lucas', 23, true];
console.log('Nombre: ', ourTuple[0]);
console.log('Edad: ', ourTuple[1]);
// Ternario
var estadocivil = (ourTuple[2]) ? 'Casado' : 'Soltero';
console.log('Estado civil: ', estadocivil);
var ourTuple2 = [23, false, 'Lucas'];
ourTuple2 = [25, true, 'Lucas'];
ourTuple2[0] = 27;
console.log(ourTuple2);
var ourReadonlyTuple = [5, true, 'Diego'];
// urReadonlyTuple.push('Cadena'); // Error
// ourReadonlyTuple[0]=30;
console.log('Nombre: ', ourReadonlyTuple[2]);
var graph = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);
// Desestructuracion de variables
var person = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 10
};
// let nombrePerson: string = person.firstName;
var firstName = person.firstName, lastName = person.lastName, _a = person.age, age = _a === void 0 ? 25 : _a;
console.log(firstName, lastName, age);
// Usando TS y desestructuración de variables hay que generar la serie de Fibonnacci con hasta 100 veces
// Graficar los resultados en pantalla
function fibonacciSeries(n) {
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
        var nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
var n = 25;
var fibonnacci = fibonacciSeries(n);
console.log(fibonnacci);
