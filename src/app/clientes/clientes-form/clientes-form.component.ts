import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';



@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  clientes: Cliente;
  sucess: boolean = false;
  errors= [];
  id: number=0;


  constructor(
    private clienteservice: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute)

    {
    this.clientes = new Cliente();

   }

   ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.clienteservice
            .getClientesbyId(this.id)
            .subscribe(
              response => this.clientes = response ,
              errorResponse => this.clientes = new Cliente()
            )
        }
    })
  }

  onsubmit(){
    if(this.id){
      this.clienteservice
      .update(this.clientes)
      .subscribe(response => {
        this.sucess = true;
        this.errors = [];
      }, errorResponse=> {
        this.errors = errorResponse.error.errors;
      })
    }
    else{
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
  back(){
    this.router.navigate(['/customer-list'])
  }

}
