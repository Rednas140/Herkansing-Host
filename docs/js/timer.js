import { entities } from "./entities.js";
export class timer extends entities {
    constructor(tagName) {
        super();
        this._timer = 3600;
        this.create();
        this.x = (window.innerWidth - this.div.clientWidth) / 3;
        this.y = 0;
    }
    get timer() {
        return this._timer;
    }
    set timer(i) {
        this._timer;
    }
    create() {
        this.div = document.createElement("timer");
        document.body.appendChild(this.div);
    }
    update() {
        let secondsLeft = Math.floor(this._timer / 60);
        this.div.innerHTML = `${secondsLeft}`;
        if (this._timer > 0) {
            this._timer--;
        }
        super.update();
    }
}
//# sourceMappingURL=timer.js.map