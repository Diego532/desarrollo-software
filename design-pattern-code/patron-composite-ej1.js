var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    Component.prototype.add = function (c) { };
    Component.prototype.remove = function (c) { };
    Component.prototype.isComposite = function () {
        return false;
    };
    return Component;
}());
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () {
        return 'leaf';
    };
    return Leaf;
}(Component));
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Composite.prototype.add = function (c) {
        this.children.push(c); // error ---------
        c.setParent(c); // duda con esta linea de codigo
    };
    Composite.prototype.remove = function (c) {
        var componentIndex = this.children.indexOf(c);
        this.children.slice(componentIndex, 1); // investigar funcion slice
        c.setParent(null);
    };
    Composite.prototype.isComposite = function () {
        return true;
    };
    Composite.prototype.operation = function () {
        var result = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            result.push(child.operation);
        }
        return "Branch(".concat(result.join('+'), ")");
    };
    return Composite;
}(Component));
// Cliente
function clientCode(component) {
    console.log("Resultado ".concat(component.operation()));
}
// Codigo fuente de ejemplo
var simple = new Leaf();
console.log('Client: I\'ve got a simple component');
//clientCode(simple);
// Al igual que un composite (un objeto compuesto)
var tree = new Composite();
var branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
var branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Now I\'ve got a composite tree');
clientCode(tree);
