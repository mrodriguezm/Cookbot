import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string='';
  password:string='';

  login() {
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
    // Aquí puedes enviar los datos a tu servicio de autenticación o realizar cualquier otra acción necesaria
  }

}
