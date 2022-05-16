import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as CryptoJS from 'crypto-js';
import { UsuarioRegis } from '../usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister!: FormGroup;
  public usuario!: UsuarioRegis;

  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    ){}

  ngOnInit(): void {
    this.formRegister = this.FormBuilder.group(
      {
        correo: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]],
        usuario: ["", [Validators.required]],
        nombre: ["", [Validators.required]],
      }
    )

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
    this.AuthService.addUsuario(this.usuario).subscribe(request =>
      console.log(request)
    );
  }

  cryptoar(pass: string, token: string) {
    let text  = CryptoJS.AES.encrypt(pass.trim(), token.trim()).toString();
    return text;
  }

}
