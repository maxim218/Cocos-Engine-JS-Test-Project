import { _decorator, Component, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RotatationManager')
export class RotatationManager extends Component {
    @property({type: Number})
    private rotationSpeed: number = 90;

    update(deltaTime: number) {
        const currentRotation: Vec3 = this.node.eulerAngles;
        currentRotation.y += this.rotationSpeed * deltaTime;
        this.node.setRotationFromEuler(currentRotation.x, currentRotation.y, currentRotation.z);
    }
}


