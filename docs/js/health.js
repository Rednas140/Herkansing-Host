import { entities } from "./entities.js";
export class health extends entities {
    constructor(tagName) {
        super();
        this._healthBar = 100;
        this.create();
        this.x = (window.innerWidth - this.div.clientWidth) / 3 * 2;
        this.y = 0;
    }
    get healthBar() {
        return this._healthBar;
    }
    set healthBar(i) {
        this._healthBar;
    }
    create() {
        this.div = document.createElement("health");
        document.body.appendChild(this.div);
    }
    update() {
        this.div.innerHTML = `${this._healthBar}`;
        super.update();
    }
    loseHealth() {
        this._healthBar -= 20;
    }
}
//# sourceMappingURL=health.js.map