import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  //variable to save the current path
  public router: Router;
  //
  rutas_nav = [
    {
    "name": "Inicio",
    "ruta": "/"
    },
    {
      "name": "Publicaciones",
      "ruta": "/publicacion"
    }
  ];

  rutas_user = [
    {
    "name": "Inicio Sesion",
    "ruta": "auth/iniciosesion"
    },
    {
      "name": "Registrate",
      "ruta": "auth/registro"
    }
  ];
  enlaces: Array<object>;

  constructor(router: Router ) {
    this.router = router;
    this.enlaces = [];
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void{
  }

  toggleMenuUser(): void{
    document.querySelector('.menu-user-shadow')?.classList.toggle('desac');
    document.querySelector('.menu-user')?.classList.toggle('desac');
  }

  comporbadorRuta(ruta: string): boolean{
    return true;
  }

}

