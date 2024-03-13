import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // Other routes
  { path: 'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent},
  { path:'', component:HomeComponent}, // Add the new route here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
