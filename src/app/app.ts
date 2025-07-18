import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Copy } from "./components/copy/copy";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Copy],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular';
}
