import { Thrash } from './thrash';
import { environment } from './../../environments/environment.prod';
import { TamañoPantallaService } from 'src/app/services/tamaño-pantalla.service';
import { Skate } from './skate';
import { Component,ElementRef, ViewChild } from '@angular/core';
import { HostListener } from "@angular/core";

declare var p5: any;
declare var collided:any;

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
  backImage = new Image();
  skate;
  thrashes = [];
  htmlStr: string;
  constructor() {
    this.getScreenSize();
  }



  saltar(){
    this.skate.jump();
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
      this.skate.jump();
    }
  }

  @ViewChild("mydiv",{static:true}) divView :ElementRef;
  
  ngOnInit() {
    new p5(p => {
      this.skate = new Skate(p,this.x,this.y);
      this.backImage = p.loadImage("../../assets/icon/back1.jpg");
      p.setup = () => {
        p.createCanvas(this.x, this.y);
      };

      p.draw = () => {

        if(p.random(1) < 0.01){
          this.thrashes.push(new Thrash(p));
        }
        p.background(this.backImage);

        for(let t of this.thrashes){
          t.move();
          t.show();
          if(this.skate.hits(t)){
            console.log("Game Over");
            this.htmlStr = "PERDISTE";
            p.noLoop();
          }
        }

        this.skate.show();
        this.skate.move();

        

      };
    }, document.getElementById('divCanva'));
  }

  restart(){
    document.location.href = 'index.html';
  }

}