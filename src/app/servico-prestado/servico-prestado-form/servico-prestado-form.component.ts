import { SerivoPrestadoService } from './../../serivo-prestado.service';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';
import {ServicoPrestado} from './../servicoPrestado'


@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = []
  servico : ServicoPrestado
  sucess: boolean = false;
  errors= [];

  constructor(private clienteService: ClientesService,
    private serivoPrestadoService: SerivoPrestadoService) {
    this.servico = new ServicoPrestado();
   }

  ngOnInit(): void {

    this.clienteService
    .getClientes()
    .subscribe( response => this.clientes = response);
  }

  onsubmit(){
    this.serivoPrestadoService
    .salvar(this.servico)
    .subscribe(response => {
      this.sucess= true;
      this.errors= [];
      this.servico = new ServicoPrestado();
    }, errorResponse => {
      this.sucess = false;
      this.errors = errorResponse.error.errors;
    })
  }
}

