// primero se crea la interfaz componente
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
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.operation = function () {
        return 'ConcreteComponet';
    };
    return ConcreteComponent;
}());
var BaseDecorator = /** @class */ (function () {
    function BaseDecorator(c) {
        this.wrapper = c;
    }
    // EL decorador delega todo el trabajo al wrappe
    BaseDecorator.prototype.operation = function () {
        return this.wrapper.operation();
    };
    return BaseDecorator;
}());
// concreteDecorator 1
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorA.prototype.operation = function () {
        return "ConcreteDecoratorA(" + _super.prototype.operation + ")";
    };
    return ConcreteDecoratorA;
}(BaseDecorator));
