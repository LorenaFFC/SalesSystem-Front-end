import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cliente} from './../../clientes/cliente';
@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente ;
  sucessMessage: String;
  errorMessage: String;

  constructor(
    private service: ClientesService,
    private router: Router) {
   }

  ngOnInit(): void {

    this.service.getClientes()
    .subscribe(resposta => this.clientes = resposta);
  }

  newCadastro(){
    this.router.navigate(['/customer-form'])
  }
  preparingDelete(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deleteCliente(){
    this.service
      .deleteClientebyId(this.clienteSelecionado)
      .subscribe(
        response => {this.sucessMessage = "Client successfully deleted!!"
        this.ngOnInit()
      },
        erro => this.errorMessage = 'There was an error deleting the Client!!'
      )
  }




}
