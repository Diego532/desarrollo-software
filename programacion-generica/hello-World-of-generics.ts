// ejemplo 1 | una funcion que toma como parametro cualquier tipo y devuelve el mismo tipo 

function indentity<type>(arg: type): type{
    return arg;
}

let outPut = indentity<string>("Hola Mundo");
console.log(outPut);
let outPut2 = indentity("hola Mundo 2 ");
console.log(outPut2);

let numero = indentity(3);
console.log(numero);


function indentity2<type>(arg : type[]) : type[]{ // como es un array de cualquier tipo type que le pasemos si pued eusar .length
    console.log(arg.length);
    return arg;
}



//how to create your own generics types, like array<types>
