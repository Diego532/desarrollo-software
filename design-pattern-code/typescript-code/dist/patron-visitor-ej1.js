var ConcreteComponentA = /** @class */ (function () {
    function ConcreteComponentA() {
    }
    ConcreteComponentA.prototype.accept = function (visitor) {
        visitor.visitConcreteComponentA(this);
    };
    //Los componentes concretos pueden tener metodos que no esten en su interfaz o clases abstracta y 
    //El visitante puede acceder a estos metodos
    ConcreteComponentA.prototype.exclusiveMethodOfConcreteComponentA = function () {
        return 'A';
    };
    return ConcreteComponentA;
}());
var ConcreteComponentB = /** @class */ (function () {
    function ConcreteComponentB() {
    }
    ConcreteComponentB.prototype.accept = function (visitor) {
        visitor.visitConcreteComponentB(this);
    };
    ConcreteComponentB.prototype.especialMethodOfConcreteComponentB = function () {
        return 'B';
    };
    return ConcreteComponentB;
}());
var ConcreteVisitor1 = /** @class */ (function () {
    function ConcreteVisitor1() {
    }
    ConcreteVisitor1.prototype.visitConcreteComponentA = function (element) {
        console.log(element.exclusiveMethodOfConcreteComponentA() + " + ConcreteVisitor1");
    };
    ConcreteVisitor1.prototype.visitConcreteComponentB = function (element) {
        console.log(element.especialMethodOfConcreteComponentB() + " + ConcreteVisitor1");
    };
    return ConcreteVisitor1;
}());
var ConcreteVisitor2 = /** @class */ (function () {
    function ConcreteVisitor2() {
    }
    ConcreteVisitor2.prototype.visitConcreteComponentA = function (element) {
        console.log(element.exclusiveMethodOfConcreteComponentA() + " + Visitor 2");
    };
    ConcreteVisitor2.prototype.visitConcreteComponentB = function (element) {
        console.log(element.especialMethodOfConcreteComponentB() + " + visitor 2");
    };
    return ConcreteVisitor2;
}());
function clientCode(componentes, visitante) {
    for (var _i = 0, componentes_1 = componentes; _i < componentes_1.length; _i++) {
        var componente = componentes_1[_i];
        componente.accept(visitante);
    }
}
// Codigo de prueba
var componentes = [new ConcreteComponentA(), new ConcreteComponentB];
console.log('El codigo cliente funciona con todos los visitantes por medio de la interfaz visitor');
var visitor1 = new ConcreteVisitor1();
clientCode(componentes, visitor1);
console.log('');
console.log('Permite que el mismo codigo cliente trabaje con diferentes tipos de visitantes');
var visitor2 = new ConcreteVisitor2();
clientCode(componentes, visitor2);
console.log('');
