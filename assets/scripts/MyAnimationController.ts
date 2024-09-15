import { _decorator, Component, Node, Animation, AnimationClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyAnimationController')
export class MyAnimationController extends Component {
    @property({type: Animation})
    private animComp: Animation = null;
    
    start() {
        this.animComp.play();
    }
}