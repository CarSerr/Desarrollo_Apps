let miNumero : number = 10;

miNumero = 10 + 10;
miNumero = 2.5;
console.log(miNumero);

let booleano : boolean = true;
booleano = false;

let encendido : boolean;
//console.log(encendido);
encendido = true;

console.log('Encendido es:',encendido);
console.log('Encendido es:',{encendido});

encendido = true && false;
encendido = true && true;
encendido = true && true;
encendido = false && true;
encendido = false && false;

console.log('Resultado:',encendido);

let normal : any = 'hola';
normal = 10;
normal = true;
normal = 11.25;
console.log('Normal:',normal);