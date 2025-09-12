import { Component } from '@angular/core';
import { Platillo } from '../../models/platillo';
import { PlatilloService } from '../../services/PlatilloService';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-alimentos',
  imports: [FormsModule,CurrencyPipe,CommonModule],
  templateUrl: './alimentos.html',
  styleUrl: './alimentos.css',
})
export class Alimentos implements OnInit {
  platillos: Platillo[] = [];

  constructor(private platilloService: PlatilloService) {}

  ngOnInit() {
    this.platilloService.platillos$.subscribe(data => {
      console.log("Platillos recibidos en Alimentos:", data); // 👈 debug
      this.platillos = data;
    });
  }
}
