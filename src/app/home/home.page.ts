import { environment } from './../../environments/environment.prod';
import { TamañoPantallaService } from 'src/app/services/tamaño-pantalla.service';
import { Unicorn } from './Unicorn';
import { Component,ElementRef, ViewChild } from '@angular/core';
import { HostListener } from "@angular/core";

declare var p5: any;

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  x: number;
  y: number;
  key = '';
  unicorn;
  constructor() {
    this.getScreenSize();
  }

  saltar(){
    this.unicorn.jump();
  }

@HostListener('window:resize', ['$event'])
getScreenSize(event?) {
      this.y = window.innerHeight -100;
      this.x = window.innerWidth;
      environment.width = this.x;
      environment.height = this.y;
      console.log(this.x, this.y);
}
@HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) { 
    this.key = event.key;
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.unicorn.jump();
    }
  }

  @ViewChild("mydiv",{static:true}) divView :ElementRef;
  
  ngOnInit() {
    new p5(p => {
      this.unicorn = new Unicorn(p,this.x,this.y);
      p.setup = () => {
        p.createCanvas(this.x, this.y);
      };

      p.draw = () => {
        p.background(200);
        this.unicorn.show();
        this.unicorn.move();
      };
    }, document.getElementById('divCanva'));
  }
}