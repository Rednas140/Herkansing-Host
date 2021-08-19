import { entities } from "./entities.js";
export class chonk extends entities {
    constructor(tagName) {
        super();
        this.create();
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth)) + 200;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    create() {
        this.div = document.createElement("chonk");
        document.body.appendChild(this.div);
    }
    update() {
        this.x -= 2;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        super.update();
    }
    damageBallChonk() {
        this.x = window.innerWidth;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
}
//# sourceMappingURL=heckingChonk.js.map