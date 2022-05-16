import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as CryptoJS from 'crypto-js';
import { UsuarioLogin } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formRegister!: FormGroup;
  public usuario!: UsuarioLogin;

  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  send(): void{
    //guardamos el formualrio en el modelo usuario
    this.usuario = this.formRegister.value;
    //el token lo pasamos a un objeto para poder usarlo
    let token = JSON.parse("" + localStorage.getItem("token"));
    //guardamos el token en el modelo para enviarlo
    this.usuario.token = token.token
    //encripatamos el password
    this.usuario.password = this.cryptoar(this.usuario.password, token.token);
    //hacemos la peticion contra backend
    this.AuthService.LoginUsuario(this.usuario).subscribe(request =>
      console.log(request)
    );
  }

  cryptoar(pass: string, token: string) {
    let text  = CryptoJS.AES.encrypt(pass.trim(), token.trim()).toString();
    return text;

  }

}
