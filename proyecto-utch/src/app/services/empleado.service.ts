import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  ListaEmpleados: AngularFireList<any>;

  SelectedEmpleado: Empleado = new Empleado();

  constructor(private firebase: AngularFireDatabase) { }

  //obtener registro
  getEmpleados()
  {
    return this.ListaEmpleados = this.firebase.list('empleado');
  }

  //insertar registro
  insertEmpleado(empleado: Empleado)
  {
     this.ListaEmpleados.push({
       nombre: empleado.nombre,
       apellido: empleado.apellido,
       departamento: empleado.departamento,
       sueldo: empleado.sueldo
     });
  }

  //actualizar registro
  updateEmpleado(empleado: Empleado)
  {
    this.ListaEmpleados.update(empleado.$key, {
      nombre: empleado.nombre,
       apellido: empleado.apellido,
       departamento: empleado.departamento,
       sueldo: empleado.sueldo
    });
  }

  //Borrar registro
  deleteEmpleado($key: string)
  {
    this.ListaEmpleados.remove($key);
  }
}
