import { _decorator, Component, Input, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ManagerInputMobile')
export class ManagerInputMobile extends Component {
    start() {
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    private onTouchStart(myEvent: EventTouch) {
        console.log('Touch - start: ' + this.node.name);
    }
    
    private onTouchEnd(myEvent: EventTouch) {
        console.log('Touch - end: ' + this.node.name);
    }
    
    private onTouchCancel(myEvent: EventTouch) {
        console.log('Touch - cancel: ' + this.node.name);
    }
}


