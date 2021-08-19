import { entities } from "./entities.js";

export class wool extends entities{
    
    // Variable for the movement 
    private verticalMovement : number = 0;

    constructor(tagName: string) {

        // Super
        super()

        //Event listeners for movement
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e));
        this.create();

        // Spawn coordinates for the wool ball
        this.x = 100;
        this.y = (window.innerHeight - this.div.clientHeight) / 2;
    }

    private create() : void {

        // Placement of the wool onto the page
        this.div = document.createElement("wool");
        document.body.appendChild(this.div);
    }

    public update() {
        // Adding the movement inputs to the y value
        this.y += this.verticalMovement;

        //Stop movement at edge
        if(this.y > window.innerHeight - this.div.clientHeight){
            this.y = window.innerHeight - this.div.clientHeight
        }
        else if(this.y < 0){
            this.y = 0
        }



        // Super update
        super.update();
    }

    private onKeyDown(e: KeyboardEvent): void {
        // Making the inputs into movement
        switch (e.key) {
            case "ArrowUp":
                this.verticalMovement = -5
                break
            case "ArrowDown":
                this.verticalMovement = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == "ArrowUp" || e.key == "ArrowDown") {
            // Make the vertical speed 0
            this.verticalMovement = 0
        }
    }


}
