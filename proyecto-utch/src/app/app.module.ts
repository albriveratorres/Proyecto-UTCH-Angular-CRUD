import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


//firebase
import {AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment';

//componentes
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ListaEmpleadoComponent } from './components/empleados/lista-empleado/lista-empleado.component';
import { EmpleadoComponent } from './components/empleados/empleado/empleado.component';

//servicios
import { EmpleadoService } from './services/empleado.service';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ListaEmpleadoComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
