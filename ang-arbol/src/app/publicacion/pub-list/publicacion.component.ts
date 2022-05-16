import { Component, OnInit } from '@angular/core';

import { Publicacion } from '../publicacion';
import { PublicacionService } from '../publicacion.service';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  public publicaciones: Publicacion [];
  div_pub: any;


  constructor(private PublicacionService: PublicacionService) {
    this.publicaciones = [];
   }

  ngOnInit() {
    this.getPublicacionBD();
  }

  // funcion para cambiar abrir la publicacion al oprimir en ella
  ngAfterContentChecked(){

  }

  getPublicacionBD(): void {
    this.PublicacionService.getPublicacionIndex()
    .subscribe(publicaciones => this.publicaciones = publicaciones);
  }

}
