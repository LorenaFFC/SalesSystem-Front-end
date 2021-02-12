import { SerivoPrestadoService } from './serivo-prestado.service';
import { ClientesModule } from './clientes/clientes.module';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component'
import {ClientesService} from './clientes.service';
import {ServicoPrestadoModule} from './servico-prestado/servico-prestado.module'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule


  ],
  providers: [
    ClientesService,
    SerivoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
