// los iteradores concretos implementan varios algoritmos de recorrido (traversal algorithms)
var IteradorOrdenAlfabetico = /** @class */ (function () {
    function IteradorOrdenAlfabetico(coleccion, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.posicion = 0;
        this.reverse = false; // indica la direccion del recorrido
        this.coleccion = coleccion;
        this.reverse = reverse;
        if (reverse) {
            this.posicion = coleccion.getCount() - 1;
        }
    }
    IteradorOrdenAlfabetico.prototype.refrescarIterador = function () {
        this.posicion = this.reverse ? this.coleccion.getCount() - 1 : 0;
    };
    IteradorOrdenAlfabetico.prototype.elementoActual = function () {
        return this.coleccion.getItems()[this.posicion]; // no entiendo la sintaxis de esta linea de codigo
    };
    IteradorOrdenAlfabetico.prototype.key = function () {
        return this.posicion;
    };
    IteradorOrdenAlfabetico.prototype.siguienteElemento = function () {
        var item = this.coleccion.getItems()[this.posicion];
        this.posicion += this.reverse ? -1 : 1; // si esta en reversa le resto uno y si esta en direccion normal le sumo 1
        return item;
    };
    IteradorOrdenAlfabetico.prototype.validarPosicionActual = function () {
        if (this.reverse) {
            return this.posicion >= 0; // si esto es verdadero es valida si es falso no es valida
        }
        return this.posicion < this.coleccion.getCount();
    };
    return IteradorOrdenAlfabetico;
}());
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.items = [];
    }
    WordsCollection.prototype.getCount = function () {
        return this.items.length; // Esta funcion me devuelve la longitud de la coleccion
    };
    WordsCollection.prototype.getItems = function () {
        return this.items;
    };
    WordsCollection.prototype.agregarItem = function (item) {
        this.items.push(item);
    };
    WordsCollection.prototype.crearIterador = function () {
        var iterador = new IteradorOrdenAlfabetico(this);
        return iterador;
    };
    ;
    return WordsCollection;
}());
// EL iterador puede saber o no sobre los iteradores concretos o las colecciones todo depende
// del nivel de indireccion que se quiera tener en el programa.
// codigo cliente
var coleccion = new WordsCollection();
coleccion.agregarItem('Diego');
coleccion.agregarItem('kamila');
coleccion.agregarItem('Luis');
var iterador = coleccion.crearIterador();
console.log('Todo esta funcionando...');
// duda de porque este while esta aqui y no en el iterador
while (iterador.validarPosicionActual()) {
    console.log(iterador.siguienteElemento());
}
console.log('');
// nota: tengo un bucle infinito que debo corregir
