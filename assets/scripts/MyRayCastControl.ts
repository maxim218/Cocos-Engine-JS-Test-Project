import { _decorator, Component, Node, systemEvent, SystemEvent, EventTouch, Vec3, Vec2, geometry, Camera, PhysicsSystem } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyRayCastControl')
export class MyRayCastControl extends Component {
    @property({type: Camera})
    private camera: Camera = null;
    
    start() {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
    }
    
    private onTouchStart(myEvent: EventTouch) {
        const screenPos: Vec2 = myEvent.getLocation();

        const ray = new geometry.Ray();
        this.camera.screenPointToRay(screenPos.x, screenPos.y, ray);

        if (PhysicsSystem.instance.raycast(ray)) {
            const results = PhysicsSystem.instance.raycastResults;
            results.forEach(currentResult => {
                console.log(currentResult.collider.node.name);
            });
        }
    }
}


