import { wool } from "./wool.js";
import { cat } from "./cat.js";
import { timer } from "./timer.js";
import { health } from "./health.js";
import { endScreen } from "./endScreen.js";
import { failScreen } from "./failScreen.js";
import { chonk } from "./chonk.js";
class Game {
    constructor() {
        this.cats = [];
        this.chonker = [];
        this.spawn = false;
        this.spawnTimer = 0;
        this.themeSong = new Audio(".//audio/song.mp3");
        this.meow = new Audio(".//audio/meow.wav");
        this.failHorn = new Audio(".//audio/failHorn.wav");
        this.clapping = new Audio(".//audio/clapping.wav");
        this.chonkerSound = new Audio(".//audio/chonker.mp3");
        this.themeSong.play();
        this.themeSong.volume = 0.5;
        this.themeSong.loop = true;
        this.cats = [new cat("cat"), new cat("cat"), new cat("cat"), new cat("cat"), new cat("cat")];
        this.chonker = [new chonk("chonk"), new chonk("chonk")];
        this.woolBal = new wool("wool");
        this.timerBar = new timer("timer");
        this.healthBar = new health("health");
        this.pause = false;
        this.gameLoop();
    }
    gameLoop() {
        for (let cat of this.cats) {
            cat.update();
            if (this.checkCollision(cat.getBoundingRect(), this.woolBal.getBoundingRect())) {
                this.meow.play();
                this.healthBar.loseHealth();
                cat.damageBall();
            }
        }
        for (let chonk of this.chonker) {
            chonk.update();
            if (this.checkCollision(chonk.getBoundingRect(), this.woolBal.getBoundingRect())) {
                this.chonkerSound.play();
                this.healthBar.loseHealth();
                chonk.damageBallChonk();
            }
        }
        this.timerBar.update();
        this.healthBar.update();
        this.spawnTimer++;
        if (this.spawnTimer > 240) {
            this.spawn = true;
            this.spawnCat();
            this.spawnTimer = 0;
        }
        if (this.healthBar.healthBar == 0) {
            this.failHorn.play();
            this.themeSong.pause();
            this.spawnFail();
            this.fail.update();
        }
        if (this.timerBar.timer == 0) {
            this.clapping.play();
            this.themeSong.pause();
            this.spawnEnd();
            this.end.update();
        }
        this.woolBal.update();
        this.spawnCat();
        if (!this.pause) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    spawnCat() {
        if (this.spawn == true) {
            console.log();
            if (Math.round(Math.random()) == 1) {
                this.cats.push(new cat("cat"));
                console.log("cat spawned");
            }
            else {
                console.log("no cat spawned");
            }
            this.spawn = false;
        }
    }
    spawnFail() {
        this.fail = new failScreen("failScreen");
        this.pause = true;
    }
    spawnEnd() {
        this.end = new endScreen("endScreen");
        this.pause = true;
    }
}
new Game();
//# sourceMappingURL=game.js.map