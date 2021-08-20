import { entities } from "./entities.js";

export class health extends entities{
    
    // The starting health
    private _healthBar : number = 20

    get healthBar() {
        return this._healthBar
    }

    set healthBar(i:number){
        this._healthBar    
    }

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
        this.div.innerHTML = `${this._healthBar}`;

        // Super Update
        super.update()
    }

    // Everytime the ball of wool is hit -20 health
    public loseHealth() : void{
        this._healthBar -= 20
     }

}