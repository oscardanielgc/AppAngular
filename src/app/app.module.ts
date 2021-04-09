import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent   //registro las app's
    /*la clase de liga con el componente externo (app.module.ts) y el decorador(selector) 
    con la página del app externo (app.component.html)*/

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
