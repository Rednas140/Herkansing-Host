import { entities } from "./entities.js";
export class cat extends entities {
    constructor(tagName) {
        super();
        this.create();
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth)) + 1000;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    create() {
        this.div = document.createElement("cat");
        document.body.appendChild(this.div);
    }
    update() {
        this.x -= 4;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        super.update();
    }
    damageBall() {
        this.x = window.innerWidth;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
}
//# sourceMappingURL=cat.js.map