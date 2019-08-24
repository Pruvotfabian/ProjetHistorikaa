import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.monde').click(function(){
        $('.menuLeft').toggleClass('active');
      });
      $('.GuerreFroide').click(function(){
        $('.menuLeftGuerreFroide').toggleClass('active');
      });
      $('.GM1').click(function(){
        $('.menuLeftGM1').toggleClass('active');
      });
      $('.GM2').click(function(){
        $('.menuLeftGM2').toggleClass('active');
      });
    });
  }

}
