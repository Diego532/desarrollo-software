
interface Coleccion<E,T>{
    crearIterador(coleccion: E) : Iterador<T>;
}

interface Iterador<T>{
    siguienteElemento(): T;
    hasMore(): boolean;
    elementoAcutal() : T;
    refrescarIterador() : void;
}

class ArrayIterator<T> implements Iterador<T>{
    private items : T[] = [];
    private posicion: number = 0;

    constructor(coleccion : T[], posicion: number = 0){
        this.items = coleccion;
        this.posicion = posicion;
    }
    public elementoAcutal() : T{
        return this.items[this.posicion];
    }

    public hasMore() : boolean {
        return 
    }

    public siguienteElemento(): T{
        return 
    };

    refrescarIterador() : void{

    };


    
}


class ConcreteArray<E,T> implements Coleccion<E,T>{
    public coleccion : T[] = [];

    constructor(){

    }

    public crearIterador(): Iterador<T> {
        const nuevoIterador = new ArrayIterator<T>(this.coleccion);
        return nuevoIterador;
    }

}