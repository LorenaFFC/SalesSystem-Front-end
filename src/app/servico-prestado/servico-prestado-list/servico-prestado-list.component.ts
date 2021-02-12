import { SerivoPrestadoService } from './../../serivo-prestado.service';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number [];
  lista: ServicoPrestadoBusca[];
  message: String;


  constructor(
    private service: SerivoPrestadoService
  ) {
    this.meses= [1,2,3,4,5,6,7,8,9,10,11,12 ]
  }

  ngOnInit(): void {
  }

  consultar(){
    this.service
      .buscar(this.nome, this.mes)
      .subscribe(response => {
        this.lista = response;
        if(this.lista.length <= 0 ){
          this.message ="NÃO FOI ENCONTRADO REGISTROS";
        }else{
          this.message ='';
        }

      });



  }
}
