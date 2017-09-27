import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.styl']
})
export class TimelineComponent implements OnInit {

  //variables a obtener de los datos

  funcionario = "alguien"
  institucion = "institución"
  partido = "partido político"
  title = "título noticia"

  constructor() { }

  ngOnInit() {
  }

}
