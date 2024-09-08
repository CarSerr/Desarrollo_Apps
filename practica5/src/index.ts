let miVariable:string = 'Hola mundo';
console.log(miVariable);

const persona = {
    nombre: "John",
    apellido: "Doe",
    edad1: 50
}

let {nombre, apellido, edad1} = persona;
console.log(nombre,' ',apellido);

let miNombre = "Carlos";
let [a1,a2,a3,a4,a5,a6]:string = miNombre;
console.log(a1,a2,a3,a4,a5,a6);

const frutas:string[] = ["platano", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1,fruta2);

let [frutaA,,,frutaB] = frutas;
console.log(frutaA,frutaB);