import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-list/servicoPrestadoBusca';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SerivoPrestadoService {

  apiURL: string = environment.apiUrl;
  apiURLServicos: string = environment.apiUrlServicos;
  constructor(private http: HttpClient) { }

  salvar(servicoPrestado : ServicoPrestado) : Observable<ServicoPrestado>
  {
      return this.http.post<ServicoPrestado>(`${this.apiURL}/api/servicos-prestados`, servicoPrestado);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]>{

    const httpParams = new HttpParams()
      .set("nome", nome )
      .set("mes", mes ?  mes.toString() : '');

    const url = this.apiURLServicos + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }

}
