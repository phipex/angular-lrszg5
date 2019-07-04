import { Component, OnInit } from '@angular/core';
import "phaser";
import { MainScene } from "./scenes/mainScene";

export const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  }
};

@Component({
  selector: 'app-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.css']
})
/*export class PhaserComponent{

  constructor(){
    console.log(config);
  }

}*/
export class PhaserComponent extends Phaser.Game {
  constructor() {
    //super(config);
    super(config);
  }
}
