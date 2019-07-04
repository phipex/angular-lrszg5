import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Phaser from 'ph'

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
export class PhaserComponent implements AfterViewInit  {
  constructor() {
    console.log("holar");
    
  }

  ngAfterViewInit() {
    // ...
  }
}
