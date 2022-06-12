interface Mediator{
    notify(emisor: object , evento: String ): void; // duda por que le pasa un objeto puedira ser cualquiera
}

class ConcreteMediator implements Mediator {
    private componente1 : Componente1;
    private componente2 : Componente2;

    constructor(c1: Componente1, c2: Componente2){
        this.componente1 = c1;
        this.componente1.setMediator(this); // aqui estoy definiendo el mediador que usaran las clases, cuando creo el mediador directamente se lo asigno a los componentes que paso como parametro
        this.componente2 = c2;
        this.componente2.setMediator(this);
    }

    public notify(emisor: object, evento: String): void {
        if (evento === 'A'){
            console.log('Mediador reacciona al evento A y dispara la siguiente operacion');
            this.componente2.doC(); // no he definido la funcion doC()
        }

        if (evento === 'D'){
            console.log('Mediador reacciona al evento D y dispara las siguientes operaciones');
            this.componente1.doB();
            this.componente2.doC();
        }
    }

}

class BaseComponent{
    protected mediator : Mediator;

    constructor(mediator ?: Mediator){ // El ?: del codigo significa que el valor es opcional se puede pasar o no.
        this.mediator = mediator;
    }

    public setMediator(mediator : Mediator): void{ // repasar la funcionalidad de getters y setters
        this.mediator = mediator;
    }

}

//los componentes concretos implemetan varias funcionalidades, no dependen de otros componentes 
// tambien no dependen de ninguna clase mediator concreta

class Componente1 extends BaseComponent{
    public doA(): void{
        console.log('Componente 1 hace A');
        this.mediator.notify(this,'A');
    }

    public doB(): void{
        console.log('Componente 1 hace B');
        this.mediator.notify(this,'B');
    }
}

class Componente2 extends BaseComponent{
    public doC():void{
        console.log('Componente 2 hace C');
        this.mediator.notify(this,'C');
    }

    public doD():void{
        console.log('Compinete 2 hace D');
        this.mediator.notify(this,'D');
    }
}

// Codigo cliente

const c1 = new Componente1();
const c2 = new Componente2();
const mediador = new ConcreteMediator(c1,c2);
console.log('Cliente disparala operacion A');
c1.doA();