var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(coleccion, posicion) {
        if (posicion === void 0) { posicion = 0; }
        this.items = [];
        this.posicion = 0;
        this.items = coleccion;
        this.posicion = posicion;
    }
    ArrayIterator.prototype.elementoAcutal = function () {
        return this.items[this.posicion];
    };
    ArrayIterator.prototype.hasMore = function () {
        return;
    };
    ArrayIterator.prototype.siguienteElemento = function () {
        return;
    };
    ;
    ArrayIterator.prototype.refrescarIterador = function () {
    };
    ;
    return ArrayIterator;
}());
var ConcreteArray = /** @class */ (function () {
    function ConcreteArray() {
        this.coleccion = [];
    }
    ConcreteArray.prototype.crearIterador = function () {
        var nuevoIterador = new ArrayIterator(this.coleccion);
        return nuevoIterador;
    };
    return ConcreteArray;
}());
