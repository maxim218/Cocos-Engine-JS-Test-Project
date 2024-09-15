import {_decorator, Component} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PerimeterCalculator')
export class PerimeterCalculator extends Component {
    private _a: number = 0;
    private _b: number = 0;
    
    public setSides(a: number, b: number) {
        this._a = a;
        this._b = b;
    }
    
    public calcPerimeter(): number {
        const s: number = this._a + this._b;
        return 2 * s;
    }
}


