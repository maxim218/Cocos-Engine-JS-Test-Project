import { _decorator, Component, Node, director, find } from 'cc';
import {PerimeterCalculator} from "db://assets/scripts/PerimeterCalculator";
import {DestroyMeAfterTime} from "db://assets/scripts/DestroyMeAfterTime";
const { ccclass, property } = _decorator;

@ccclass('ManagerCalculatePerim')
export class ManagerCalculatePerim extends Component {
    @property({type: Number})
    private first: number = 0;

    @property({type: Number})
    private second: number = 0;
    
    start() {
        const comp: PerimeterCalculator = this.node.getComponent(PerimeterCalculator);
        if (comp) {
            comp.setSides(this.first, this.second);
            const result: number = comp.calcPerimeter();
            console.log('Perimeter: ' + result);
        }
        
        const arrayNames: string[] = [ 'd_1', 'd_2', 'd_3', 'd_4' ];

        arrayNames.forEach(name => {
            const nodeElem: Node = find(name);
            const comp: DestroyMeAfterTime = nodeElem.getComponent(DestroyMeAfterTime);
            const n: number = comp.getMaxWaitValue();
            const message: string = `${name} : ${n}`;
            console.log(message);
        });
    }
}


