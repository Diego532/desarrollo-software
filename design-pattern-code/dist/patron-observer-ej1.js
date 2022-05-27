var concreteSubject = /** @class */ (function () {
    function concreteSubject() {
        this.observers = [];
    }
    // Los metodos de manejo de la suscripcion
    concreteSubject.prototype.addObservador = function (observer) {
        var isExist = this.observers.includes(observer); // investigar metodo de array includes
        if (isExist) {
            return console.log('El suscriptor que se quiere agregar ya existe');
        }
        console.log('Subject: Agrego un observador');
        this.observers.push(observer);
    };
    return concreteSubject;
}());
