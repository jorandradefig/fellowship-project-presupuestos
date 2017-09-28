import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.styl']
})
export class TarjetasComponent implements OnInit {

  datos: string;
  tarjeta: any;

  constructor() { }
  ngOnInit() {
  }

}
