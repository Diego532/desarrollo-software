// primero se crea la interfaz componente

interface Component {
    operation(): string;
}

class ConcreteComponent implements Component{
    public operation() : string {
        return 'ConcreteComponet';
    }
}

class BaseDecorator implements Component{
    protected wrapper : Component;

    constructor(c : Component){
        this.wrapper = c;
    }

    // EL decorador delega todo el trabajo al wrappe
    public operation() : string {
        return this.wrapper.operation();
    }
}

// concreteDecorator 1

class ConcreteDecoratorA extends BaseDecorator{
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation})`
    }
}