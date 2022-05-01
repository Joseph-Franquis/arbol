import { Component, OnInit } from '@angular/core';

import { Publicacion } from '../publicacion';
import { PublicacionService } from '../publicacion.service';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicaciones: Publicacion [];


  constructor(private PublicacionService: PublicacionService) {
    this.publicaciones = [];
   }

  ngOnInit() {
    this.getPublicacionBD();

  }

  getPublicacionBD(): void {
    this.PublicacionService.getPublicaciones()
    .subscribe(publicaciones => this.publicaciones = publicaciones);
  }

}
