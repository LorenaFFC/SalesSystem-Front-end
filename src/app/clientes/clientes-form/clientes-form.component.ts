import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente'
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  clientes: Cliente;
  sucess: boolean = false;
  errors= [];

  constructor( private clienteservice: ClientesService) {
    this.clientes = new Cliente();

   }

  ngOnInit(): void {
  }

  onsubmit(){
    this.clienteservice
    .salvar(this.clientes)
    .subscribe(response => {
      this.sucess= true;
      this.errors= [];
      this.clientes = response;
    }, errorResponse => {
      this.sucess = false;
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors)
    }
    )
  }

}
