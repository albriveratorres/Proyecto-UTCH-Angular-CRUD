import { Component, OnInit } from '@angular/core';

//service
import { EmpleadoService } from '../../../services/empleado.service'
import { Empleado } from 'src/app/models/empleado';
import { element } from 'protractor';


@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  listaEmpleados: Empleado[];

  constructor(
    private empleadoService: EmpleadoService
    
  ) { }

  ngOnInit(): void {

    this.empleadoService.getEmpleados()
      .snapshotChanges()
      .subscribe(item => {
        this.listaEmpleados = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.listaEmpleados.push(x as Empleado);
        });
      });
  }

  onEdit(empleado: Empleado)
  {
    this.empleadoService.SelectedEmpleado = Object.assign({},empleado);
  }

  onDelete($key: string)
  {
    if(confirm('Estas seguro de eliminar el registro?')){
      this.empleadoService.deleteEmpleado($key);
    }
    
  }

}
