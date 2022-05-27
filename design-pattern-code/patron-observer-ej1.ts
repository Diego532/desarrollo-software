interface Subject {
    addObservador(observer: Observer): void;
    removeObservador(observer: Observer): void;
    notify():void;
}

interface Observer {
    update(subject: Subject):void;
}

class ConcreteSubject implements Subject{

    
    public state: number;
    private observers: Observer[] = [];

    // Los metodos de manejo de la suscripcion
    public addObservador(observer: Observer): void{
        const isExist = this.observers.includes(observer); // investigar metodo de array includes
        if (isExist){
            return console.log('El suscriptor que se quiere agregar ya existe');
        }

        console.log('Subject: Agrego un observador');
        this.observers.push(observer);
    }

    public removeObservador(observer: Observer): void {
        const observadorIndex = this.observers.indexOf(observer);
        if (observadorIndex === -1){
            return console.log('Observador no existe');
        }
        this.observers.slice(observadorIndex,1);
        console.log("El observador ha eliminado su suscripcion");
        
    } 

    public notify(): void {
        console.log('Subject notificando observadores...');
        for (const observador of this.observers){
            observador.update(this); // Error en la definicion d elos parametros en la interface observer y subject
        }
    }

    public someBussinessLogic() : void{
        console.log('Estoy haciendo algo importante');
        this.state = Math.floor(Math.random()*(10 + 1));

        console.log(`My state  has just changed to ${this.state}`);
        this.notify();
    }

}

class ConcreteObserverA implements Observer{
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }

}






