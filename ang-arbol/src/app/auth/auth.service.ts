import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioRegis, UsuarioLogin } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  addUsuario(usuario_env: UsuarioRegis): Observable<UsuarioRegis> {
    return this.http.post<UsuarioRegis>("http://127.0.0.5/api/auth/register", JSON.stringify(usuario_env), this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  LoginUsuario(usuario_env: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("http://127.0.0.5/api/auth/register", JSON.stringify(usuario_env), this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
