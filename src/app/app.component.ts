import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //propidades:
  title = 'miprimerApp';     //esta definición de esta variable que invoco en el index, se le llama propiedad, para ser reutilizada
  saludo="Hola alumnos de Angular,  como estais";
}
