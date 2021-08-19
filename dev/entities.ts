export class entities {

    // Protected fields
    protected x : number = 0
    protected y : number = 0
    protected div: HTMLElement
    protected btn: HTMLElement
    protected br: HTMLElement

    // getBoundingRect
    public getBoundingRect() : DOMRect{
        return this.div.getBoundingClientRect()
    }

    public update() {

        // Translation of x and y to px
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
            }
}