

interface Iterador<T>{ // utilizamos un tipo parametrizados para denotar que puede devolver cualquier cosa que contenga la coleccion
    // Retorna el elemento actual
    elementoActual(): T;

    //Retorna el elemento actual y luego se mueve hacia el siguiente elemento
    siguienteElemento(): T;

    // Retorna el key del valor actual
    key(): number;

    // Check si la posicion actual es valida
    validarPosicionActual(): boolean;

    //  Refreca el iterador hasta su primer elemento
    refrescarIterador():void; 
}

interface Coleccion{
    crearIterador(): Iterador<string>;
}

// los iteradores concretos implementan varios algoritmos de recorrido (traversal algorithms)
class IteradorOrdenAlfabetico implements Iterador<string>{
    private coleccion : WordsCollection;
    private posicion: number = 0;
    private reverse: boolean = false; // indica la direccion del recorrido

    constructor(coleccion: WordsCollection, reverse : boolean = false) { // duda de por que se le llama constructor y no como el nombre de la clase
        this.coleccion = coleccion;
        this.reverse = reverse;
        if (reverse){
            this.posicion = coleccion.getCount() - 1;
        }
    }

    public refrescarIterador(){
        this.posicion = this.reverse ? this.coleccion.getCount() - 1 : 0;
    }

    public  elementoActual(): string {
        return this.coleccion.getItems()[this.posicion]; // no entiendo la sintaxis de esta linea de codigo
    }

    public key(): number{
        return this.posicion;
    }

    public siguienteElemento(): string {
        const item = this.coleccion.getItems()[this.posicion];
        this.posicion += this.reverse ? -1 : 1; // si esta en reversa le resto uno y si esta en direccion normal le sumo 1
        return item;
    }

    public validarPosicionActual(): boolean {
        
        if (this.reverse){
            return this.posicion >= 0; // si esto es verdadero es valida si es falso no es valida
        }
            return this.posicion < this.coleccion.getCount();
    }
        
} 

class WordsCollection implements Coleccion{

    private items : string[] = [];


    public getCount() : number{
        return this.items.length; // Esta funcion me devuelve la longitud de la coleccion
    }

    public getItems() : string[]{
        return this.items;
    }

    public agregarItem(item : string): void{
        this.items.push(item);
    }

    public  crearIterador(): Iterador<string>{
        const iterador = new IteradorOrdenAlfabetico(this);
        return iterador;
    };


    
}

// EL iterador puede saber o no sobre los iteradores concretos o las colecciones todo depende
// del nivel de indireccion que se quiera tener en el programa.

// codigo cliente

const coleccion = new WordsCollection();
coleccion.agregarItem('Diego');
coleccion.agregarItem('kamila');
coleccion.agregarItem('Luis');

const iterador = coleccion.crearIterador();

console.log('Todo esta funcionando...');

// duda de porque este while esta aqui y no en el iterador
 while (iterador.validarPosicionActual()){
     console.log(iterador.siguienteElemento());
 }

console.log('');

// nota: tengo un bucle infinito que debo corregir