import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicacionComponent } from './publicacion/publicacion.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publi', component: PublicacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
