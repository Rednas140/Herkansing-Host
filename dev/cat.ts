// Import entities for inheritance
import { entities } from "./entities.js";

export class cat extends entities{

    constructor(tagName: string) {
        
        // Super
        super()

        // The create function
        this.create();

        // The x and y values of the cat
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth)) + 500; 
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }

    private create() : void{

        // Adding the cat to the page
        this.div = document.createElement("cat");
        document.body.appendChild(this.div);
    }

    public update() : void {

        // X movement of the cat
        this.x -= 4;

        // Repeating the cat if it goes out of bounds
        if(this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }


        // Super Update
        super.update();
    }

    // Respawn the cat to the right side of page
    public damageBall() : void {
        this.x = window.innerWidth;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));

}
}