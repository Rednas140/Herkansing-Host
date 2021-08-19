import { entities } from "./entities.js";
export class wool extends entities {
    constructor(tagName) {
        super();
        this.verticalMovement = 0;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.create();
        this.x = 100;
        this.y = (window.innerHeight - this.div.clientHeight) / 2;
    }
    create() {
        this.div = document.createElement("wool");
        document.body.appendChild(this.div);
    }
    update() {
        this.y += this.verticalMovement;
        if (this.y > window.innerHeight - this.div.clientHeight) {
            this.y = window.innerHeight - this.div.clientHeight;
        }
        else if (this.y < 0) {
            this.y = 0;
        }
        super.update();
    }
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                this.verticalMovement = -5;
                break;
            case "ArrowDown":
                this.verticalMovement = 5;
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalMovement = 0;
        }
    }
}
//# sourceMappingURL=wool.js.map