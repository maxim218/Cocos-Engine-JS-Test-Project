import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CounterButtonControl')
export class CounterButtonControl extends Component {
    
    private count: number = 0;

    @property({type: Label})
    private labelCounter: Label = null;

    @property({type: Node})
    private nodeBtn: Node = null;
    
    public actionClickCountBtn() {
        this.count += 1;
        const message = `   Count: ${this.count}   `;
        console.log(message);
        
        if (this.labelCounter) {
            this.labelCounter.string = message;
        }
        
        if (this.count >= 5) {
            if (this.nodeBtn) {
                this.nodeBtn.active = false;
            }
        }
        
        // test what will happen on Error
        throw new Error('My test error when I click the btn')
    }
    
}


