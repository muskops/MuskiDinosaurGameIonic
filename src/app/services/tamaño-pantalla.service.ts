import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TamañoPantallaService {
  x:number;
  y:number;
  constructor(x:number,y:number) { 
    this.x = x;
    this.y = y;
  }
}
