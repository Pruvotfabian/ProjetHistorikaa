import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
  $('.slide4').removeClass('active');
  $('.slide4b').removeClass('active');
  $('.slide1').addClass('active');
  $('.slide1b').addClass('active');
  setTimeout(() => {
  $('.slide1').removeClass('active');
  $('.slide1b').removeClass('active');
  $('.slide2').addClass('active');
  $('.slide2b').addClass('active');
  }, 16000);
  setTimeout(() => {
    $('.slide2').removeClass('active');
    $('.slide2b').removeClass('active');
    $('.slide3').addClass('active');
    $('.slide3b').addClass('active');
  }, 32000);
  setTimeout(() => {
    $('.slide3').removeClass('active');
    $('.slide3b').removeClass('active');
    $('.slide4').addClass('active');
    $('.slide4b').addClass('active');
    }, 48000);
    setTimeout(() => {
      this.reboot();
    }, 64000);
}
reboot(){
  this.slideshow();
}
}
