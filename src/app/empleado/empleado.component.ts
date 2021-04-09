import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui iria un empleado!</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {  //que esta implementando interfaz
  nombre = "Juan";

  apellido = "Díaz";

  edad = 18;

  empresa = "ITS";
  constructor() { }

  ngOnInit(): void {
  }

}
