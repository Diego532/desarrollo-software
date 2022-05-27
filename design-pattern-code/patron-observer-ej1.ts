interface Subject {
    addObervador(observer: Observer): void;
    removeObservador(observer: Observer): void;
    notify():void;
}

interface Observer{
    //Recibe update de subject.
    update(subject: Subject): void;
}

class concreteSubject implements Subject{

    public state: number;
    private observers: Observer[] = [];

    // Los metodos de manejo de la suscripcion
    addObservador(observer: Observer): void{
        const isExist = this.observers.includes(observer); // investigar metodo de array includes
        if (isExist){
            return console.log('El suscriptor que se quiere agregar ya existe');
        }

        console.log('Subject: Agrego un observador');
        this.observers.push(observer);
    }

}

