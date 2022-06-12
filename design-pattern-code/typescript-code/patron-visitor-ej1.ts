interface Component{
    accept(visitor : Visitor) : void;

}


interface Visitor{
    visitConcreteComponentA(element:  ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;

}

class ConcreteComponentA implements Component{
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    //Los componentes concretos pueden tener metodos que no esten en su interfaz o clases abstracta y 
    //El visitante puede acceder a estos metodos

    public exclusiveMethodOfConcreteComponentA() : String{
        return 'A';
    }
}

class ConcreteComponentB implements Component{
    public accept(visitor: Visitor): void {
      visitor.visitConcreteComponentB(this);  
    }

    public especialMethodOfConcreteComponentB(): String{
        return 'B';
    }
}

class ConcreteVisitor1 implements Visitor{
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.especialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
    }
}

class ConcreteVisitor2 implements Visitor{
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + Visitor 2`);
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.especialMethodOfConcreteComponentB()} + visitor 2`)
    }
}

function clientCode(componentes: Component[], visitante: Visitor){

    for(const componente of componentes){
        componente.accept(visitante);
    }
}



// Codigo de prueba
const componentes = [new ConcreteComponentA(), new ConcreteComponentB];
console.log('El codigo cliente funciona con todos los visitantes por medio de la interfaz visitor');
const visitor1 = new ConcreteVisitor1();
clientCode(componentes,visitor1);
console.log('');


console.log('Permite que el mismo codigo cliente trabaje con diferentes tipos de visitantes');
const visitor2 = new ConcreteVisitor2();
clientCode(componentes,visitor2);
console.log('');
