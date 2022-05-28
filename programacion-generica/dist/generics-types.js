function identity(arg) {
    return arg;
}
var myIdentity = identity; // se esta definiendo la funcion, esta se llamara  myIdentity
console.log(myIdentity(6));
// nota: el tipo parametrizado se puede usar como parametro global de la interface o como parametro de una funcion de la interface
