import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.styl']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      
      $('#myCarouselArticle').carousel({
                      interval: 1000
              });
        
      });
  }

}
