var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    // Los metodos de manejo de la suscripcion
    ConcreteSubject.prototype.addObservador = function (observer) {
        var isExist = this.observers.includes(observer); // investigar metodo de array includes
        if (isExist) {
            return console.log('El suscriptor que se quiere agregar ya existe');
        }
        console.log('Subject: Agrego un observador');
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.removeObservador = function (observer) {
        var observadorIndex = this.observers.indexOf(observer);
        if (observadorIndex === -1) {
            return console.log('Observador no existe');
        }
        this.observers.slice(observadorIndex, 1);
        console.log("El observador ha eliminado su suscripcion");
    };
    ConcreteSubject.prototype.notify = function () {
        console.log('Subject notificando observadores...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observador = _a[_i];
            observador.update(this); // Error en la definicion d elos parametros en la interface observer y subject
        }
    };
    ConcreteSubject.prototype.someBussinessLogic = function () {
        console.log('Estoy haciendo algo importante');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("My state  has just changed to " + this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    };
    return ConcreteObserverA;
}());
