import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';



  procesarResultado(resultado:number){
    this.resultadoPadre = resultado;
  }
  resultadoPadre: number=0;


}
