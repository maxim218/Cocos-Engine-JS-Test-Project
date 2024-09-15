import { _decorator, Component, Vec3, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveForwardControl')
export class MoveForwardControl extends Component {
    @property({type: Number})
    private speed: number = 5;

    update(deltaTime: number) {
        const move: Vec3 = new Vec3(0, 0, this.speed * deltaTime);
        this.node.translate(move, Node.NodeSpace.LOCAL);
    }
}


