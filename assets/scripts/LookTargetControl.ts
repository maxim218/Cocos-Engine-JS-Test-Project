import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LookTargetControl')
export class LookTargetControl extends Component {
    @property({type: Node})
    private targetNode: Node = null;

    update(deltaTime: number) {
        if (this.targetNode) {
            const targetPosition = this.targetNode.worldPosition;
            this.node.lookAt(targetPosition);
        }
    }
}


