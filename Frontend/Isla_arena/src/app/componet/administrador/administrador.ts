import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-administrador',
  imports: [FormsModule],
    standalone: true, 
  templateUrl: './administrador.html',
  styleUrl: './administrador.css'
})
export class Administrador {
  nombre: string=''
  correo: string=''
  contrasena: string=''
  con_contrasena: string=''

  acept(){
    if(this.correo=='' || this.contrasena==''){
      alert('Por favor llene todos los campos');
    }else{
      alert('Registro exitoso');
    }
  }



  registre(){
    if(this.nombre== '' || this.correo=='' || this.contrasena==''|| this.con_contrasena==''){
      alert('PORFAVOR LLENE TODOS LOS CAMPOS')
    }else{
      alert('REGISTRO CON EXITO')
    }
  }
}
