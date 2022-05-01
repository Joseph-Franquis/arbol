import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public rute: string;
  rutas_nav = [
    {
    "name": "Inicio",
    "ruta": "/"
    },
    {
      "name": "Publicaciones",
      "ruta": "/publi"
    }
  ];
  enlaces: Array<object>;

  constructor(router: Router, ) {
    this.rute = router.url;
    this.enlaces = [];
  }

  ngOnInit(): void {
    console.log(this);

  }

  comporbadorRuta(ruta: string): boolean{
    console.log(document.querySelector)
    return true;
  }

}

