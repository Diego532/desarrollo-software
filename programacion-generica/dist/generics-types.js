function identity(arg) {
    return arg;
}
var myIdentity = identity; // se esta definiendo la funcion, esta se llamara  myIdentity
console.log(myIdentity(6));
// nota: el tipo parametrizado se puede usar como parametro global de la interface o como parametro de una funcion de la interface
//Generic Class
//las clases genericas tiene una forma parecida a las interfaces genericas, estas clases tiene un tipo parametrizado despues del nombre
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
