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
      // MENUS
      $('.World').click(function(){
        $('.menuLeft').toggleClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        
      });
      $('.ColdWar').click(function(){
        $('.menuLeftGuerreFroide').toggleClass('active');
        $('.menuLeft').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        
      });
      $('.WW1').click(function(){
        $('.menuLeftGM1').toggleClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeft').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
      
      });
      $('.WW2').click(function(){
        $('.menuLeftGM2').toggleClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeft').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
       
      });

      // MENUS GM1
        // GRANDE BATAILLE
        $('.GBGM1').click(function(){
          $('.menuLeft').removeClass('active');
          $('.menuLeftGuerreFroide').removeClass('active');
          $('.menuLeftGM1').removeClass('active');
          $('.menuLeftGM2').removeClass('active');
          // BLOCK ARTICLE
          $('.GM1').removeClass('active');
          $('.GM2').addClass('active');
          $('.GF').addClass('active');
          $('.W').addClass('active');
          // ARTICLE
          $('.GM1GB').addClass('active');
          $('.GM1WV').removeClass('active');
          $('.GM1CG').removeClass('active');
          $('.GM1HG').removeClass('active');
        });
      // cri G
      $('.CGGM1').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').removeClass('active');
        $('.GM2').addClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM1CG').addClass('active');
        $('.GM1WV').removeClass('active');
        $('.GM1GB').removeClass('active');
        $('.GM1HG').removeClass('active');
      });
      // WE & VEHI
      $('.WVGM1').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').removeClass('active');
        $('.GM2').addClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM1WV').addClass('active');
        $('.GM1GB').removeClass('active');
        $('.GM1CG').removeClass('active');
        $('.GM1HG').removeClass('active');
      });
      // HE GUE
      $('.HGGM1').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').removeClass('active');
        $('.GM2').addClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM1HG').addClass('active');
        $('.GM1WV').removeClass('active');
        $('.GM1CG').removeClass('active');
        $('.GM1GB').removeClass('active');
      });

      // MENU GM2
        // GRANDE BATAILLE
        $('.GBGM2').click(function(){
          $('.menuLeft').removeClass('active');
          $('.menuLeftGuerreFroide').removeClass('active');
          $('.menuLeftGM1').removeClass('active');
          $('.menuLeftGM2').removeClass('active');
          // BLOCK ARTICLE
          $('.GM1').addClass('active');
          $('.GM2').removeClass('active');
          $('.GF').addClass('active');
          $('.W').addClass('active');
          // ARTICLE
          $('.GM2GB').addClass('active');
          $('.GM2CG').removeClass('active');
          $('.GM2WV').removeClass('active');
          $('.GM2HG').removeClass('active');
          $('.GM2R').removeClass('active');
          $('.GM2P').removeClass('active');
          
        });
      // cri G
      $('.CGGM2').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').addClass('active');
        $('.GM2').removeClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM2CG').addClass('active');
        $('.GM2GB').removeClass('active');
        $('.GM2WV').removeClass('active');
        $('.GM2HG').removeClass('active');
        $('.GM2R').removeClass('active');
        $('.GM2P').removeClass('active');
      });
      // WE & VEHI
      $('.WVGM2').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').addClass('active');
        $('.GM2').removeClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM2WV').addClass('active');
        $('.GM2CG').removeClass('active');
        $('.GM2GB').removeClass('active');
        $('.GM2HG').removeClass('active');
        $('.GM2R').removeClass('active');
        $('.GM2P').removeClass('active');
      });
      // HE GUE
      $('.HGGM2').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').addClass('active');
        $('.GM2').removeClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM2HG').addClass('active');
        $('.GM2CG').removeClass('active');
        $('.GM2WV').removeClass('active');
        $('.GM2GB').removeClass('active');
        $('.GM2R').removeClass('active');
        $('.GM2P').removeClass('active');
      });
      // Prop
      $('.PGM2').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').addClass('active');
        $('.GM2').removeClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM2P').addClass('active');
        $('.GM2CG').removeClass('active');
        $('.GM2WV').removeClass('active');
        $('.GM2HG').removeClass('active');
        $('.GM2R').removeClass('active');
        $('.GM2GB').removeClass('active');
      });
       // REST
       $('.RGM2').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        // BLOCK ARTICLE
        $('.GM1').addClass('active');
        $('.GM2').removeClass('active');
        $('.GF').addClass('active');
        $('.W').addClass('active');
        // ARTICLE
        $('.GM2R').addClass('active');
        $('.GM2CG').removeClass('active');
        $('.GM2WV').removeClass('active');
        $('.GM2HG').removeClass('active');
        $('.GM2GB').removeClass('active');
        $('.GM2P').removeClass('active');
      });

      // MENU GF
              // GRANDE BATAILLE
              $('.GBGF').click(function(){
                $('.menuLeft').removeClass('active');
                $('.menuLeftGuerreFroide').removeClass('active');
                $('.menuLeftGM1').removeClass('active');
                $('.menuLeftGM2').removeClass('active');
                $('.GFGB').addClass('active');
                // BLOCK ARTICLE
                $('.GM1').addClass('active');
                $('.GM2').addClass('active');
                $('.GF').removeClass('active');
                $('.W').addClass('active');
                // ARTICLE
                $('.GFGB').addClass('active');
                $('.GFWV').removeClass('active');
                $('.GFP').removeClass('active');
                $('.GFCS').removeClass('active');
                $('.GFESP').removeClass('active');
              });
            // WE & VEHI
            $('.WVGF').click(function(){
              $('.menuLeft').removeClass('active');
              $('.menuLeftGuerreFroide').removeClass('active');
              $('.menuLeftGM1').removeClass('active');
              $('.menuLeftGM2').removeClass('active');
              $('.GFWV').addClass('active');
                  // BLOCK ARTICLE
                  $('.GM1').addClass('active');
                  $('.GM2').addClass('active');
                  $('.GF').removeClass('active');
                  $('.W').addClass('active');
                // ARTICLE
                $('.GFGB').removeClass('active');
                $('.GFWV').addClass('active');
                $('.GFP').removeClass('active');
                $('.GFCS').removeClass('active');
                $('.GFESP').removeClass('active');
            });
            // Cour SPA
            $('.CSGF').click(function(){
              $('.menuLeft').removeClass('active');
              $('.menuLeftGuerreFroide').removeClass('active');
              $('.menuLeftGM1').removeClass('active');
              $('.menuLeftGM2').removeClass('active');
              $('.GFCS').addClass('active');
              // BLOCK ARTICLE
              $('.GM1').addClass('active');
              $('.GM2').addClass('active');
              $('.GF').removeClass('active');
              $('.W').addClass('active');
                // ARTICLE
                $('.GFGB').removeClass('active');
                $('.GFWV').removeClass('active');
                $('.GFP').removeClass('active');
                $('.GFCS').addClass('active');
                $('.GFESP').removeClass('active');
            });
            // Prop
            $('.PGF').click(function(){
              $('.menuLeft').removeClass('active');
              $('.menuLeftGuerreFroide').removeClass('active');
              $('.menuLeftGM1').removeClass('active');
              $('.menuLeftGM2').removeClass('active');
              $('.GFP').addClass('active');
              // BLOCK ARTICLE
              $('.GM1').addClass('active');
              $('.GM2').addClass('active');
              $('.GF').removeClass('active');
              $('.W').addClass('active');
                // ARTICLE
                $('.GFGB').removeClass('active');
                $('.GFWV').removeClass('active');
                $('.GFP').addClass('active');
                $('.GFCS').removeClass('active');
                $('.GFESP').removeClass('active');
            });
             // CIA VS KGB
             $('.CIAGF').click(function(){
              $('.menuLeft').removeClass('active');
              $('.menuLeftGuerreFroide').removeClass('active');
              $('.menuLeftGM1').removeClass('active');
              $('.menuLeftGM2').removeClass('active');
              // BLOCK ARTICLE
              $('.GM1').addClass('active');
              $('.GM2').addClass('active');
              $('.GF').removeClass('active');
              $('.W').addClass('active');
                // ARTICLE
                $('.GFGB').removeClass('active');
                $('.GFWV').removeClass('active');
                $('.GFP').removeClass('active');
                $('.GFCS').removeClass('active');
                $('.GFESP').addClass('active');
            });

      // MENU MONDE
     // EUROPA
    $('.EUROPA').click(function(){
      $('.menuLeft').removeClass('active');
      $('.menuLeftGuerreFroide').removeClass('active');
      $('.menuLeftGM1').removeClass('active');
      $('.menuLeftGM2').removeClass('active');
      $('.WEUR').addClass('active');
        // BLOCK ARTICLE
        $('.GM1').addClass('active');
        $('.GM2').addClass('active');
        $('.GF').addClass('active');
        $('.W').removeClass('active');
        // ARTICLE
        $('.WEUR').addClass('active');
        $('.WASIA').removeClass('active');
        $('.WOCE').removeClass('active');
        $('.WORI').removeClass('active');
        $('.WAFRI').removeClass('active');
        $('.WUS').removeClass('active');
        $('.WBRE').removeClass('active');
    });
    // ASIA
    $('.ASIA').click(function(){
      $('.menuLeft').removeClass('active');
      $('.menuLeftGuerreFroide').removeClass('active');
      $('.menuLeftGM1').removeClass('active');
      $('.menuLeftGM2').removeClass('active');
      $('.WASIA').addClass('active');
              // BLOCK ARTICLE
              $('.GM1').addClass('active');
              $('.GM2').addClass('active');
              $('.GF').addClass('active');
              $('.W').removeClass('active');
               // ARTICLE
               $('.WEUR').removeClass('active');
               $('.WASIA').addClass('active');
               $('.WOCE').removeClass('active');
               $('.WORI').removeClass('active');
               $('.WAFRI').removeClass('active');
               $('.WUS').removeClass('active');
               $('.WBRE').removeClass('active');
    });
     // OCEANIA
     $('.OCEANIA').click(function(){
      $('.menuLeft').removeClass('active');
      $('.menuLeftGuerreFroide').removeClass('active');
      $('.menuLeftGM1').removeClass('active');
      $('.menuLeftGM2').removeClass('active');
      $('.WOCE').addClass('active');
              // BLOCK ARTICLE
              $('.GM1').addClass('active');
              $('.GM2').addClass('active');
              $('.GF').addClass('active');
              $('.W').removeClass('active');
               // ARTICLE
               $('.WEUR').removeClass('active');
               $('.WASIA').removeClass('active');
               $('.WOCE').addClass('active');
               $('.WORI').removeClass('active');
               $('.WAFRI').removeClass('active');
               $('.WUS').removeClass('active');
               $('.WBRE').removeClass('active');
    });
       // ORIENT
       $('.ORIENT').click(function(){
        $('.menuLeft').removeClass('active');
        $('.menuLeftGuerreFroide').removeClass('active');
        $('.menuLeftGM1').removeClass('active');
        $('.menuLeftGM2').removeClass('active');
        $('.WORI').addClass('active');
                // BLOCK ARTICLE
                $('.GM1').addClass('active');
                $('.GM2').addClass('active');
                $('.GF').addClass('active');
                $('.W').removeClass('active');
                 // ARTICLE
                 $('.WEUR').removeClass('active');
                 $('.WASIA').removeClass('active');
                 $('.WOCE').removeClass('active');
                 $('.WORI').addClass('active');
                 $('.WAFRI').removeClass('active');
                 $('.WUS').removeClass('active');
                 $('.WBRE').removeClass('active');
      });
    //  AFRIKA
     $('.AFRIKA').click(function(){
      $('.menuLeft').removeClass('active');
      $('.menuLeftGuerreFroide').removeClass('active');
      $('.menuLeftGM1').removeClass('active');
      $('.menuLeftGM2').removeClass('active');
      $('.WAFRI').addClass('active');
        // BLOCK ARTICLE
      $('.GM1').addClass('active');
      $('.GM2').addClass('active');
      $('.GF').addClass('active');
      $('.W').removeClass('active');
       // ARTICLE
       $('.WEUR').removeClass('active');
       $('.WASIA').removeClass('active');
       $('.WOCE').removeClass('active');
       $('.WORI').removeClass('active');
       $('.WAFRI').addClass('active');
       $('.WUS').removeClass('active');
       $('.WBRE').removeClass('active');
    });
     //  NORTH AMERIKA
     $('.NAMERIKA').click(function(){
      $('.menuLeft').removeClass('active');
      $('.menuLeftGuerreFroide').removeClass('active');
      $('.menuLeftGM1').removeClass('active');
      $('.menuLeftGM2').removeClass('active');
      $('.WUS').addClass('active');
      // BLOCK ARTICLE
      $('.GM1').addClass('active');
      $('.GM2').addClass('active');
      $('.GF').addClass('active');
      $('.W').removeClass('active');
       // ARTICLE
       $('.WEUR').removeClass('active');
       $('.WASIA').removeClass('active');
       $('.WOCE').removeClass('active');
       $('.WORI').removeClass('active');
       $('.WAFRI').removeClass('active');
       $('.WUS').addClass('active');
       $('.WBRE').removeClass('active');
    });
         //  SOUTH AMERIKA
         $('.SAMERIKA').click(function(){
          $('.menuLeft').removeClass('active');
          $('.menuLeftGuerreFroide').removeClass('active');
          $('.menuLeftGM1').removeClass('active');
          $('.menuLeftGM2').removeClass('active');
          $('.WBRE').addClass('active');
                  // BLOCK ARTICLE
        $('.GM1').addClass('active');
        $('.GM2').addClass('active');
        $('.GF').addClass('active');
        $('.W').removeClass('active');
         // ARTICLE
         $('.WEUR').removeClass('active');
         $('.WASIA').removeClass('active');
         $('.WOCE').removeClass('active');
         $('.WORI').removeClass('active');
         $('.WAFRI').removeClass('active');
         $('.WUS').removeClass('active');
         $('.WBRE').addClass('active');
        });
    });
  }

}
