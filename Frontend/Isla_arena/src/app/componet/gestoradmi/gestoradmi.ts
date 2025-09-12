import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlatilloService } from '../../services/PlatilloService';
import { Platillo } from '../../models/platillo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-gestoradmi',
  imports: [CommonModule,FormsModule],
  templateUrl: './gestoradmi.html',
  styleUrl: './gestoradmi.css'
})
export class Gestoradmi {

  // para navegar en las secciones
  activeSection: string = 'resumen';

  setSection(section: string) {
    this.activeSection = section;

  }

  // para llenar las tablas
  nombre = '';
  descripcion = '';
  precio!: number;
  imagenBase64: string = '';

  constructor(private platilloService: PlatilloService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
subirPlatillo() {
  const nuevoPlatillo: Platillo = {
    nombre: this.nombre,
    descripcion: this.descripcion,
    precio: this.precio,
    imagen: this.imagenBase64
  };

  alert("Platillo Subido con Exito" + nuevoPlatillo);
  //console.log("Subiendo:", nuevoPlatillo); // 👈 prueba
  this.platilloService.agregarPlatillo(nuevoPlatillo);
}
}
