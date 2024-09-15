import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HeroController')
export class HeroController extends Component {
    @property({type: Number})
    public speed: number = 15;
    
    private _x: number = -6;
    private _y: number = 2.9;

    @property({type: Number})
    private z: number = 3.5;
    
    start() {
        this.node.setPosition(this._x, this._y, this.z);
    }
    
    update(deltaTime: number) {
        this._x += this.speed * deltaTime;
        if (this._x > 8) {
            this._x = -6;
        }
        this.node.setPosition(this._x, this._y, this.z);
    }
}


