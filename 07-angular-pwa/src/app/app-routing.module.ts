import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { PaisesComponent } from './pages/paises/paises.component';
import { PaisComponent } from './pages/pais/pais.component';


const routes: Routes = [
  { path: '', component: PaisesComponent },
  { path: 'pais/:id', component: PaisComponent },
  { path: '**', component: PaisComponent }

];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( routes )],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
