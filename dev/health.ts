import { entities } from "./entities.js";

export class health extends entities{
    
    // The starting health
    public healthBar : number = 100


    constructor(tagName: string) {

        // Super
        super()

        // The create function
        this.create();

        // The x and y values of the health
        this.x = (window.innerWidth - this.div.clientWidth) / 3 * 2;
        this.y = 0
    }

    private create() : void{

        // Adding the timer to the page
        this.div = document.createElement("health");
        document.body.appendChild(this.div);
    }


    public update() : void {

        // Updating the health in-game 
        this.div.innerHTML = `${this.healthBar}`;

        // Super Update
        super.update()
    }

    // Everytime the ball of wool is hit -20 health
    public loseHealth() : void{
        this.healthBar -= 20
     }

}