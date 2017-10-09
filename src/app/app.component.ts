import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as d3 from "d3";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.styl']
})
export class InfoComponent implements OnInit {

  dataPresupuesto: any;

  @Input()
  limit: number;

  constructor(private http: Http) { }

 
  ngOnInit() {
    this.getData();
  }

  getData() {
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRlqcEjwCnYSA9sVjzILs9BjVOKH92kkVWjxOjCznFJn0fIpkwIXahm4bHjwe5EdyvowamfDzVYQ8R5/pub?gid=921933229&single=true&output=csv", (data,error ) => {
      this.dataPresupuesto = data;
    });
  }
}