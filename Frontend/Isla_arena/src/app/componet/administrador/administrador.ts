import { CommonModule } from '@angular/common';
import { Component, linkedSignal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  imports: [FormsModule,CommonModule],
  standalone: true, 
  templateUrl: './administrador.html',
  styleUrl: './administrador.css'
})
export class Administrador {
  constructor(private router: Router) { }
  nombre: string=''
  correo: string=''
  contrasena: string=''
  con_contrasena: string=''
  modoRegistro: boolean = false;

  mostrarRegistro() {
    this.modoRegistro = true;
  }

  mostrarLogin() {
    this.modoRegistro = false;
  }

  acept(){
    if(this.correo=='' || this.contrasena==''){
      alert('Por favor llene todos los campos');
    }else{
      alert('Registro exitoso');
      this.router.navigate(['/gestor']);
    }
  }

  registre(){
    if(this.nombre== '' || this.correo=='' || this.contrasena==''|| this.con_contrasena==''){
      alert('PORFAVOR LLENE TODOS LOS CAMPOS')
    }else if(this.contrasena != this.con_contrasena){
      alert('LAS CONTRASEÑAS NO COINCIDEN')
    }else{
      alert('REGISTRO EXITOSO')
      this.router.navigate(['/gestor']);
    }
  }
  
}
