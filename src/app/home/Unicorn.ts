import { environment } from './../../environments/environment.prod';
import { HomePage } from './home.page';
import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class Unicorn{
    r:number;
    x:number;
    y:number;
    vy:number;
    cont:number;
    p:any;
    gravity;
    canvas;
    height:number;
    muski = new Image();
    imagen;
    constructor(
      p:any,
      x:number,
      y:number
      ){
      this.p = p;
      this.r = 50;  
      this.x = 0;
      this.height = y;
      this.y = y-100;
      this.vy = 0;
      this.cont = 0;
      this.gravity = 2;
      
    }
    
   

        
      
      

    show(){
      this.imagen = document.getElementById('muskii');
      //this.p.image(this.imagen, 33, 71, 104, 124);
      this.canvas = <HTMLCanvasElement> document.getElementById('defaultCanvas0');
      if (this.canvas.getContext) {
        var Canvas = this.canvas.getContext('2d');
        if(this.cont == 0){
            this.y = environment.height - this.y; 
        }
        this.cont++;
        Canvas.drawImage(this.imagen,this.x,this.y, this.r,this.r);
      }
    }
    jump(){
        this.vy = -25;
    }
    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = this.p.constrain(this.y,0,this.height - this.r);
    }
  }
  