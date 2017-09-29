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
    $(document).ready(function(ev){
      $('#custom_carousel').on('slide.bs.carousel', function (evt) {
        $('#custom_carousel .controls li.active').removeClass('active');
        $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
      })
  });
  }

}
