import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.blockMenu').click(function(){
        $('.block').toggleClass('active');
        $('.blockMenuClose').toggleClass('active');
        $('.blockMenu').toggleClass('active');
      });
      $('.blockMenuClose').click(function(){
        $('.block').removeClass('active');
        $('.blockMenuClose').removeClass('active');
        $('.blockMenu').removeClass('active');
      });
      $('.navigation').click(function(){
        $('.block').removeClass('active');
        $('.blockMenuClose').removeClass('active');
        $('.blockMenu').removeClass('active');
      });
    });
  }
  
}
