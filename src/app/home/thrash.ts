import { environment } from './../../environments/environment.prod';
import { HomePage } from './home.page';
import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })

export class Thrash{
    canvas;
    r:number;
    x:number;
    y:number;
    p:any;
    imagenThrash = new Image();
    constructor(p:any){
        this.p = p;
        this.r = 50;
        this.x = environment.width;
        this.y = environment.height - this.r;
        this.imagenThrash.src = "../../assets/icon/thrash.png";
        
    }

    move(){
        this.x -= 8;
    }

    show(){
        this.canvas = <HTMLCanvasElement> document.getElementById('defaultCanvas0');
      if (this.canvas.getContext) {
        var Canvas = this.canvas.getContext('2d');
        Canvas.drawImage(this.imagenThrash,this.x,this.y, this.r,this.r);
      }
    }
}