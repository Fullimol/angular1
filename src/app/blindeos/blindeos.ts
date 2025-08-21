import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blindeos',
  imports: [FormsModule],
  templateUrl: './blindeos.html',
  styleUrl: './blindeos.css'
})
export class Blindeos {
nombre: string = "Bruno";
  contador = 0;

  link = "https://www.google.com";
  estilo = "background-color: lightblue;";

  contadorSumar() {
    this.contador++;
  }
}
