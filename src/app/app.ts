import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Blindeos } from "./blindeos/blindeos";
import { Bienvenida } from "./bienvenida/bienvenida";
import { Error } from "./error/error";
import { Login } from "./login/login";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Blindeos, Bienvenida, Error, Login, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}