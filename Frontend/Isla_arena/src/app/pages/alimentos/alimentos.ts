import { Component } from '@angular/core';

@Component({
  selector: 'app-alimentos',
  imports: [],
  templateUrl: './alimentos.html',
  styleUrl: './alimentos.css'
})
export class Alimentos {

  alimentos = [
    'macarrones con queso'
    , 'ensalada de pasta'
    , 'sopa de verduras'
    , 'pollo al horno con patatas'
    , 'tacos de carne'
    
  ]


  constructor() { 
    this.alimentos.sort();
  }
}
