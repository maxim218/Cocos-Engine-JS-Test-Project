import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DestroyMeAfterTime')
export class DestroyMeAfterTime extends Component {
    private current: number = 0;

    @property({type: Number})
    private maxWaitValue: number = 5;

    public getMaxWaitValue(): number {
        return this.maxWaitValue;
    }
    
    update(deltaTime: number) {
        this.current += deltaTime;
        
        if (this.current > this.maxWaitValue) {
            const message = `Destroy node: ${this.node.name}`;
            console.log(message);
            this.node.destroy();
        }
    }
}


