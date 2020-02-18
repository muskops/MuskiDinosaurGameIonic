import { environment } from '../../environments/environment.prod';
import { HomePage } from './home.page';
import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class Skate{
    r:number;
    x:number;
    y:number;
    vy:number;
    cont:number;
    p:any;
    gravity;
    canvas;
    height:number;
    imagen;
    imagenSkater = new Image();
    constructor(
      p:any,
      x:number,
      y:number
      ){
      this.p = p;
      this.r = 80;  
      this.x = 50;
      this.height = y;
      this.y = y-100;
      this.vy = 0;
      this.cont = 0;
      this.gravity = 2;
      this.imagenSkater.src = "../../assets/icon/skaterSprite.png";
    }

    show(){
      //this.imagen = document.getElementById('muskii');
      this.canvas = <HTMLCanvasElement> document.getElementById('defaultCanvas0');
      if (this.canvas.getContext) {
        var Canvas = this.canvas.getContext('2d');
        if(this.cont == 0){
            this.y = environment.height - this.y; 
        }
        this.cont++;
        Canvas.drawImage(this.imagenSkater,this.x,this.y, this.r,this.r);
      }
      //this.p.image(this.imagenSkater,0,0,40,40);
    }

    jump(){
      if(this.y == this.height - this.r){
        this.vy = -30;
      }
    }

    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = this.p.constrain(this.y,0,this.height - this.r);
    }

    hits(skate:any){
      return this.p.collideRectRect(this.x,this.y,this.r,this.r,skate.x,skate.y,skate.r,skate.r);
    }

  }
