import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';


import { Publicacion } from './publicacion';

@Injectable({ providedIn: 'root' })
export class PublicacionService {

  private heroesUrl = 'http://127.0.0.5/api/publicaciones';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

    /** GET heroes from the server */
    getPublicacionIndex(): Observable<Publicacion[]> {
      return this.http.get<Publicacion[]>(this.heroesUrl);
    }

    getPublicacionShow(id: number): Observable<Publicacion> {
      return this.http.get<Publicacion>(this.heroesUrl+"/"+id);
    }

    getPublicacionStore(): Observable<Publicacion> {
      return this.http.get<Publicacion>(this.heroesUrl);
    }
    getPublicacionUpdate(): Observable<Publicacion> {
      return this.http.get<Publicacion>(this.heroesUrl);
    }
    getPublicacionDestroy(): Observable<Publicacion> {
      return this.http.get<Publicacion>(this.heroesUrl);
    }

}
