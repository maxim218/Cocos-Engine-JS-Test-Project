import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FollowTargetControl')
export class FollowTargetControl extends Component {
    @property({type: Node})
    private targetNode: Node = null;

    @property({type: Number})
    private speed: number = 5;
    
    update(deltaTime: number) {
        if (this.targetNode) {
            const currentPosition = this.node.worldPosition;
            const targetPosition = this.targetNode.worldPosition;
            const maxStep = this.speed * deltaTime;
            const nextPosition = new Vec3(0, 0, 0);
            Vec3.moveTowards(nextPosition, currentPosition, targetPosition, maxStep);
            this.node.setWorldPosition(nextPosition);
        }
    }
}


