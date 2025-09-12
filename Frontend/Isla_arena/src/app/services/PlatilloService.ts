import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platillo } from '../models/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  private platillos = new BehaviorSubject<Platillo[]>([]);
  platillos$ = this.platillos.asObservable();

  constructor() {
    const guardados = localStorage.getItem('platillos');
    if (guardados) {
      this.platillos.next(JSON.parse(guardados));
    }
  }

  agregarPlatillo(platillo: Platillo) {
    const actual = this.platillos.getValue();
    const nuevos = [...actual, platillo];
    this.platillos.next(nuevos);
    localStorage.setItem('platillos', JSON.stringify(nuevos));
  }
}