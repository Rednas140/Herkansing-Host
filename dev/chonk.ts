// Import entities for inheritance
import { entities } from "./entities.js";

export class chonk extends entities{

    constructor(tagName: string) {

        // Super
        super()

        // The create function
        this.create();
        
        // The x and y values of the chonk
        this.x = window.innerWidth; 
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }

    private create() : void{

        //adding the chonk to the page
        this.div = document.createElement("chonk");
        document.body.appendChild(this.div);
    }

    public update() : void {
        
        // X movement of the chonk
        this.x = this.x -2;

        // Repeating the chonk if it goes out of bounds
        if(this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }

        // Super Update
        super.update();
    }

    // Respawn the chonk to the right side of page
    public damageBallChonk() : void {
        this.x = window.innerWidth;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

}
}