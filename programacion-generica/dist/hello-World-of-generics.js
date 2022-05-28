// ejemplo 1 | una funcion que toma como parametro cualquier tipo y devuelve el mismo tipo 
function indentity(arg) {
    return arg;
}
var outPut = indentity("Hola Mundo");
console.log(outPut);
var outPut2 = indentity("hola Mundo 2 ");
console.log(outPut2);
var numero = indentity(3);
console.log(numero);
function indentity2(arg) {
    console.log(arg.length);
    return arg;
}
//how to create your own generics types, like array<types>
