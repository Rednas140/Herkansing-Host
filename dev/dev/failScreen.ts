import { entities } from "./entities.js";

export class failScreen extends entities{

    constructor(tagName: string) {

        // Super
        super()

        // The create function
        this.create();

        //The x and y values of the failscreen
        this.x = (window.innerWidth - this.div.clientWidth) / 2;
        this.y = (window.innerHeight - this.div.clientHeight) / 2;
    }

    private create() : void{

        // Adding the failScreen to the page
        this.div = document.createElement("fail");
        this.div.innerHTML = "You failed";
        this.br = document.createElement("br")
        this.btn = document.createElement("button")
        this.btn.innerHTML = "Click here to restart";
        this.btn.addEventListener("click", ()=>window.location.reload())
        this.div.appendChild(this.br)
        this.div.appendChild(this.btn)
        document.body.appendChild(this.div);
    }


    public update() : void {

        // Super Update
        super.update()
    }

}