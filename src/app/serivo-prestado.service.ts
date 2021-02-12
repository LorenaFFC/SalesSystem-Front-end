import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SerivoPrestadoService {

  apiURL: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  salvar(servicoPrestado : ServicoPrestado) : Observable<ServicoPrestado>
  {
      return this.http.post<ServicoPrestado>(`${this.apiURL}/api/servicos-prestados`, servicoPrestado);
  }


}