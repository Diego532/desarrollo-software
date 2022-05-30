//first generic interface
interface GenericIdentityFn<type>{
    (arg: type):type;
}

function identity<type>(arg : type) : type{
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity; // se esta definiendo la funcion, esta se llamara  myIdentity

console.log(myIdentity(6));

// nota: el tipo parametrizado se puede usar como parametro global de la interface o como parametro de una funcion de la interface

//Generic Class
//las clases genericas tiene una forma parecida a las interfaces genericas, estas clases tiene un tipo parametrizado despues del nombre

class GenericNumber<NumType>{
    zeroValue: NumType;
    add : (x:NumType,y:NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){
    return x + y;
}

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x,y) {
    return x + y;
}

// Restricciones:
interface Lengthwise{
    length: number;
}

function loggingIdentity<type extends Lengthwise>(arg : type): type{
    console.log(arg.length);
    return arg;

}