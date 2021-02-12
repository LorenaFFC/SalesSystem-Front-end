import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiUrl;

  constructor( private http: HttpClient) {

  }

  salvar(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}/api/clientes`, cliente);

  }

  update(cliente: Cliente) : Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/api/clientes/${cliente.id}`, cliente);

  }



  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}/api/clientes`);
  }


  getClientesbyId(id: number) : Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURL}/api/clientes/${id}`);
  }

  deleteClientebyId(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/api/clientes/${cliente.id}`);
  }
}
