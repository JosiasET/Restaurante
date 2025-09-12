import { Injectable } from '@angular/core';
import { Bebida } from '../models/bebidas';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BebidasService {
   private bebidas = new BehaviorSubject<Bebida[]>([]);
   bebidas$ = this.bebidas.asObservable();
   constructor() {
        const guardados = localStorage.getItem('bebidas');
        if (guardados) {
            this.bebidas.next(JSON.parse(guardados));
        }
   }

   agregarBebida(bebida: Bebida) {
        const actual = this.bebidas.getValue();
        const nuevos = [...actual, bebida];
        this.bebidas.next(nuevos);
        localStorage.setItem('bebidas', JSON.stringify(nuevos));
    }

}