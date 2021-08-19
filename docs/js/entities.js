export class entities {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=entities.js.map