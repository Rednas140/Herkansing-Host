import { entities } from "./entities.js";
export class health extends entities {
    constructor(tagName) {
        super();
        this.healthBar = 100;
        this.create();
        this.x = (window.innerWidth - this.div.clientWidth) / 3 * 2;
        this.y = 0;
    }
    create() {
        this.div = document.createElement("health");
        document.body.appendChild(this.div);
    }
    update() {
        this.div.innerHTML = `${this.healthBar}`;
        super.update();
    }
    loseHealth() {
        this.healthBar -= 20;
    }
}
//# sourceMappingURL=health.js.map