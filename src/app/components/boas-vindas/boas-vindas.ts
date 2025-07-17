import { Component } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  imports: [],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.css'
})
export class BoasVindas {
  closePopUp(){
    const popUp = document.getElementById("popUp")

    if (popUp) {
      popUp.style.visibility = "hidden"
    }

  }
}
