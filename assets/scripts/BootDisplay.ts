import { _decorator, Component, Node, ResolutionPolicy, view, View } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BootDisplay')
export class BootDisplay extends Component {
    start() {
        view.setDesignResolutionSize(window.innerWidth, window.innerHeight, ResolutionPolicy.SHOW_ALL);
        view.resizeWithBrowserSize(true);
    }
}
