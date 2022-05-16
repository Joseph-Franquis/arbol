import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-arbol';

  constructor(
    private AppService: AppService
  ){

  }

  ngOnInit(): void {
    //this code is for save token in localStorage
    this.AppService.getToken().subscribe(respuesta =>{ localStorage.setItem("token",JSON.stringify(respuesta)) });
  }
}
