import { Component, OnInit } from '@angular/core';
//import * as d3 from "d3";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.styl']
})
export class TarjetasComponent implements OnInit {

  titulo: any;
  texto: any;
  fecha: any;

  constructor() { }
  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
   // d3.json('/Users/Paola/Documents/fellowship-project-presupuestos/src/app/tarjetas', (error, Info) => {
     // this.texto = Info;
    //});
  }

}
