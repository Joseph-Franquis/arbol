export interface UsuarioRegis {
  usuario: string;
  nombre: string;
  correo: string;
  password: string;
  token: string;
}

export interface UsuarioLogin {
  correo: string;
  password: string;
  token: string;
}
