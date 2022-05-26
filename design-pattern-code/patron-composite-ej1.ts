abstract class Component {
    protected parent : Component;

    public setParent(parent: Component){
        this.parent = parent;
    }

    public getParent(): Component{
        return this.parent;
    }

    public add(component:Component): void{}

    public remove(component: Component):void{}

    public isComposite(): boolean{
        return false;
    }

    public abstract operation():string;
}

class Leaf extends Component{
    public operation():string{
        return 'leaf';
    }
}

class Composite extends Component{

    protected children : Component[] = []; // Aqui estaba el error me daba undifiend por que no se habia inicializado el array en null o vacio

   
    public add(c: Component):void{
        this.children.push(c);
        c.setParent(this); // duda con esta linea de codigo
    }
    
    public remove(c:Component):void{
        const componentIndex = this.children.indexOf(c);
        this.children.slice(componentIndex,1); // investigar funcion slice
        c.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation():string{
        const result = [];
        for (const child of this.children){
            result.push(child.operation);
        }
        return`Branch(${result.join()})`;
    }
}

// Cliente
function clientCode(component: Component){
    console.log(`Resultado ${component.operation()}`);
}

// Codigo fuente de ejemplo
const simple = new Leaf();
console.log('Client: I\'ve got a simple component');
clientCode(new Leaf);

// Al igual que un composite (un objeto compuesto)
const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf);
branch1.add(new Leaf);

const branch2 = new Leaf();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Now I\'ve got a Composite Tree');

clientCode(tree);