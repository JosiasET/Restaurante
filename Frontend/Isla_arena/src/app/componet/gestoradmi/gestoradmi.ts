import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gestoradmi',
  imports: [CommonModule],
  templateUrl: './gestoradmi.html',
  styleUrl: './gestoradmi.css'
})
export class Gestoradmi {
  activeSection: string = 'resumen'; // por defecto abre "resumen"

  setSection(section: string) {
    this.activeSection = section;

  }
}
