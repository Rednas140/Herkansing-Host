// All the imports
import { wool } from "./wool.js"
import { cat } from "./cat.js"
import { timer } from "./timer.js"
import { health } from "./health.js"
import { endScreen } from "./endScreen.js"
import { failScreen } from "./failScreen.js"
import { chonk } from "./chonk.js"

class Game {
    // Fields
    // Making the imported files usable
    private end : endScreen
    private fail : failScreen
    private healthBar : health
    private timerBar : timer
    private cats : cat[] = []
    private woolBal : wool
    private chonker : chonk[] = []

    // Variables used in the program
    private spawn : boolean = false 
    private spawnTimer : number = 0
    private pause : boolean
   
    // Sounds
    private themeSong : HTMLAudioElement = new Audio("/docs/audio/song.mp3");
    private meow : HTMLAudioElement = new Audio("/docs/audio/meow.wav")
    private failHorn : HTMLAudioElement = new Audio("/docs/audio/failHorn.wav")
    private clapping : HTMLAudioElement = new Audio("/docs/audio/clapping.wav")
    private chonkerSound : HTMLAudioElement = new Audio("/docs/audio/chonker.mp3")

    constructor() {
        // Create the cats
        this.cats = [new cat("cat"), new cat("cat"), new cat("cat"), new cat("cat"), new cat("cat")]

        // Create the chonk
        this.chonker = [new chonk("chonk"), new chonk("chonk")]

        // Create the wool ball
        this.woolBal = new wool("wool")

        // Create the timer bar
        this.timerBar = new timer("timer")

        // Create the health bar
        this.healthBar = new health("health")

        // Set the pause to false
        this.pause = false

        // Start the gameloop
        this.gameLoop()

    }

    // The gameloop
    private gameLoop() : void {
        // Start the theme song
        this.themeSong.play()
        this.themeSong.volume = 0.5
        this.themeSong.loop = true        

        // Cats loop
        for (let cat of this.cats) {

            // Update the cats
            cat.update()

            // Check cat collision
            if(this.checkCollision(cat.getBoundingRect(), this.woolBal.getBoundingRect())) {
                this.meow.play()
                this.healthBar.loseHealth()
                cat.damageBall()
            }
        }

        // Chonk loop
        for(let chonk of this.chonker){

            // Update the chonk
            chonk.update()

            // Check chonk collision

            if(this.checkCollision(chonk.getBoundingRect(), this.woolBal.getBoundingRect())) {
                this.chonkerSound.play()
                this.healthBar.loseHealth()
                chonk.damageBallChonk()
            }
        }
        
        // Update timer
        this.timerBar.update()

        // Update health
        this.healthBar.update()

        // Every 2 seconds spawncat gets called
        this.spawnTimer++
        if(this.spawnTimer > 240) {
            this.spawn = true
            this.spawnCat()
            this.spawnTimer = 0
        }

        // When health is 0 pause the game and spawn the fail screen
        if(this.healthBar.healthBar <= 0){
            this.failHorn.play()
            this.themeSong.pause()
            this.spawnFail()
            this.fail.update()
        }

        // When timer is 0 pause the game and spawn the end screen
        if(this.timerBar.timer == 0){
            this.clapping.play()
            this.themeSong.pause()
            this.spawnEnd()
            this.end.update()
        }

        // Update the wool ball
        this.woolBal.update()
        
        // Check if new cats need to be spawned
        this.spawnCat()

        // The game pause
        if (!this.pause) {
        requestAnimationFrame(() => this.gameLoop())
        }
    }

    // Collision check
    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     // A chance of 50% to spawn a new cat
     private spawnCat() : void{
        if(this.spawn == true){
            console.log()
            if(Math.round(Math.random()) == 1){
                this.cats.push(new cat("cat"))
                console.log("cat spawned")
            }else{
            console.log("no cat spawned")
            }
            this.spawn = false
        }
    }

    // Spawn of the failscreen
    private spawnFail() : void{
        this.fail = new failScreen("failScreen")
        this.pause = true
    }

    // Spawn of the Endscreen
    private spawnEnd() : void {
        this.end = new endScreen("endScreen")
        this.pause = true
    }
} 

//Game start
new Game()