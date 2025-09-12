import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Home } from "../../pages/home/home"; 
@Component({
  selector: 'app-layout',
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
 
})
export class Layout {

  modoRegistro: boolean = true;

  activado(){
    this.modoRegistro = false;
  }

}

