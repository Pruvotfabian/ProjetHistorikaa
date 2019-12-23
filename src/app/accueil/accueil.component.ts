import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  constructor() { }

  ngOnInit() {
      this.slideshow();
    
  }


slideshow(){
      $('.slide1').addClass('active');
      $('.slide1b').addClass('active');
          setTimeout(() => {
            this.slideremove();
            $('.slide2').addClass('active');
            $('.slide2b').addClass('active');
            }, 16000);
                setTimeout(() => {
                  this.slideremove();
                  $('.slide3').addClass('active');
                  $('.slide3b').addClass('active');
                }, 32000);
                    setTimeout(() => {
                      this.slideremove();
                      $('.slide4').addClass('active');
                      $('.slide4b').addClass('active');
                      this.slidenext();
                      }, 48000);
                  }
                
        
slideremove(){
    $('.slide1').removeClass('active');
    $('.slide1b').removeClass('active');
    $('.slide2').removeClass('active');
    $('.slide2b').removeClass('active');
    $('.slide3').removeClass('active');
    $('.slide3b').removeClass('active');
    $('.slide4').removeClass('active');
    $('.slide4b').removeClass('active');
}

slidenext(){
  setTimeout(() => {
    this.slideremove();
    this.ngOnInit()
  }, 16000);

}



}
