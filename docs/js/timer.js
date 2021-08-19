import { entities } from "./entities.js";
export class timer extends entities {
    constructor(tagName) {
        super();
        this.timer = 3600;
        this.create();
        this.x = (window.innerWidth - this.div.clientWidth) / 3;
        this.y = 0;
    }
    create() {
        this.div = document.createElement("timer");
        document.body.appendChild(this.div);
    }
    update() {
        let secondsLeft = Math.floor(this.timer / 60);
        this.div.innerHTML = `${secondsLeft}`;
        if (this.timer > 0) {
            this.timer--;
        }
        super.update();
    }
}
//# sourceMappingURL=timer.js.map