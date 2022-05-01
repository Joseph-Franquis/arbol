import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { PublicacionComponent } from './publicacion/pub-list/publicacion.component';
import { PubShowComponent } from './publicacion/pub-show/pub-show.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publicacion', component: PublicacionComponent },
  { path: 'publicacion/:id', component: PubShowComponent },
  { path: 'auth/iniciosesion', component: LoginComponent },
  { path: 'auth/registro', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
