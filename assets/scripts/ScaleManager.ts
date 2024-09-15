import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('ScaleManager')
export class ScaleManager extends Component {
    private k: number = 1;
    private direction: number = 1;

    update(deltaTime: number) {
        this.k += this.direction * deltaTime;
        
        if (this.k > 2.5)
            this.setDirection(-1);
        if (this.k < 1)
            this.setDirection(1);
        
        this.node.setScale(this.k, this.k, this.k);
    }
    
    setDirection(value: number) {
        this.direction = value;
    }
}


