import { Component } from '@angular/core';
import {PhaserComponent, config} from './phaser/phaser.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(){
    console.log('hiiiiii222');
  }
}
