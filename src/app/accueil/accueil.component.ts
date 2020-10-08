import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {


  constructor() { 
    
  }
 
 

  ngOnInit() {
   
      this.slideshow();
    
  }
  @ViewChild('video')videoo: ElementRef;

slideshow(){
  setTimeout(() => {
    this.videoo.nativeElement.play();
    this.go();
  }, 1000);
  
    $('.slide1b').addClass('active');
          setTimeout(() => {
            this.slideremove();
            $('.slide2b').addClass('active');
            }, 16000);
                setTimeout(() => {
                  this.slideremove();
                  $('.slide3b').addClass('active');
                }, 32000);
                    setTimeout(() => {
                      this.slideremove();
                      $('.slide4b').addClass('active');
                      this.slidenext();
                      }, 48000);
                  }
        
slideremove(){
    $('.slide1b').removeClass('active');
    $('.slide2b').removeClass('active');
    $('.slide3b').removeClass('active');
    $('.slide4b').removeClass('active');
}

go(){
  this.videoo.nativeElement.play();
}
slidenext(){
  setTimeout(() => {
    this.slideremove();
    this.ngOnInit()
  }, 16000);
}



}
