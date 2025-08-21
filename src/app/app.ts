import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre: string = "Bruno";
  contador = 0;

  link = "https://www.google.com";
  estilo = "background-color: lightblue;";

  contadorSumar() {
    this.contador++;
  }
}