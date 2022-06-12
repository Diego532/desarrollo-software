var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(c1, c2) {
        this.componente1 = c1;
        this.componente1.setMediator(this); // aqui estoy definiendo el mediador que usaran las clases, cuando creo el mediador directamente se lo asigno a los componentes que paso como parametro
        this.componente2 = c2;
        this.componente2.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (emisor, evento) {
        if (evento === 'A') {
            console.log('Mediador reacciona al evento A y dispara la siguiente operacion');
            this.componente2.doC(); // no he definido la funcion doC()
        }
        if (evento === 'D') {
            console.log('Mediador reacciona al evento D y dispara las siguientes operaciones');
            this.componente1.doB();
            this.componente2.doC();
        }
    };
    return ConcreteMediator;
}());
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
//los componentes concretos implemetan varias funcionalidades, no dependen de otros componentes 
// tambien no dependen de ninguna clase mediator concreta
var Componente1 = /** @class */ (function (_super) {
    __extends(Componente1, _super);
    function Componente1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Componente1.prototype.doA = function () {
        console.log('Componente 1 hace A');
        this.mediator.notify(this, 'A');
    };
    Componente1.prototype.doB = function () {
        console.log('Componente 1 hace B');
        this.mediator.notify(this, 'B');
    };
    return Componente1;
}(BaseComponent));
var Componente2 = /** @class */ (function (_super) {
    __extends(Componente2, _super);
    function Componente2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Componente2.prototype.doC = function () {
        console.log('Componente 2 hace C');
        this.mediator.notify(this, 'C');
    };
    Componente2.prototype.doD = function () {
        console.log('Compinete 2 hace D');
        this.mediator.notify(this, 'D');
    };
    return Componente2;
}(BaseComponent));
// Codigo cliente
var c1 = new Componente1();
var c2 = new Componente2();
var mediador = new ConcreteMediator(c1, c2);
console.log('Cliente disparala operacion A');
c1.doA();
