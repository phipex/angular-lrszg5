import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PhaserComponent } from './phaser/phaser.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PhaserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(){
    console.log('hiiiiii');
  }   
}
