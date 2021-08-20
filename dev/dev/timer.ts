import { entities } from "./entities.js";

export class timer extends entities{
    
    // The starting timer
    private _timer: number = 3600

    get timer() {
        return this._timer
    }

    set timer(i:number){
        this._timer    
    }
    constructor(tagName: string) {

        // Super
        super()

        // The create function
        this.create();

        // The x and y values of the timer
        this.x = (window.innerWidth - this.div.clientWidth) / 3;
        this.y = 0;
    }

    private create() : void{

        // Adding the timer to the page
        this.div = document.createElement("timer");

        document.body.appendChild(this.div);
    }

    public update() : void {

        // Updating the timer in-game 
        let secondsLeft = Math.floor(this._timer / 60)
        this.div.innerHTML = `${secondsLeft}`;

        // timer
        if(this._timer > 0){
            this._timer--
        }

        // Super update
        super.update()
    }

}
