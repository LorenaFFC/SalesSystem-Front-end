import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component'
const routes: Routes = [
  { path:'customer-form', component: ClientesFormComponent},
  { path:'customer-form/:id', component: ClientesFormComponent},
  { path:'customer-list', component: ClientesReadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
