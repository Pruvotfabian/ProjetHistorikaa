import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { ArticleComponent } from './article/article.component';
import { NewComponent } from './new/new.component';
import { ArticleViewComponent } from './article-view/article-view.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    ArticleComponent,
    NewComponent,
    ArticleViewComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
