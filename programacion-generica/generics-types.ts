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