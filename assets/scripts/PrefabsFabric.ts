import {_decorator, Component, director, instantiate, Prefab, Vec3} from 'cc';

const { ccclass, property } = _decorator;

@ccclass('PrefabsFabric')
export class PrefabsFabric extends Component {
    @property({type: Prefab})
    private prefabElement: Prefab = null;
    
    start() {
        this.createPrefab(new Vec3(-10, 7, 0), 'house-1');
        this.createPrefab(new Vec3(0, 7, 0), 'house-2');
        this.createPrefab(new Vec3(10, 7, 0), 'house-3');
    }
    
    private createPrefab(position: Vec3, nameData: string) {
        const element = instantiate(this.prefabElement);
        element.parent = director.getScene();
        element.setPosition(position);
        element.name = nameData;
    }
}


