import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { ArticleComponent } from './article/article.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ContactComponent } from './contact/contact.component';
import { MentionComponent } from './mention/mention.component';
import { AucunarticlesComponent } from './articlesList/aucunarticles/aucunarticles.component';
import { GM1Component } from './article-view/gm1/gm1.component';
import { GM2Component } from './article-view/gm2/gm2.component';
import { GFComponent } from './article-view/gf/gf.component';
import { WorldComponent } from './article-view/world/world.component';
import { EuropaComponent } from './article-view/world/europa/europa.component';
import { AsiaComponent } from './article-view/world/asia/asia.component';
import { OceaniaComponent } from './article-view/world/oceania/oceania.component';
import { OrientComponent } from './article-view/world/orient/orient.component';
import { AfrikaComponent } from './article-view/world/afrika/afrika.component';
import { AmerikaComponent } from './article-view/world/amerika/amerika.component';
import { SamerikaComponent } from './article-view/world/samerika/samerika.component';
import { Gm1gbComponent } from './article-view/gm1/gm1gb/gm1gb.component';
import { Gm1wvComponent } from './article-view/gm1/gm1wv/gm1wv.component';
import { Gm1wcComponent } from './article-view/gm1/gm1wc/gm1wc.component';
import { Gm1hgComponent } from './article-view/gm1/gm1hg/gm1hg.component';
import { Gm2gbComponent } from './article-view/gm2/gm2gb/gm2gb.component';
import { Gm2wvComponent } from './article-view/gm2/gm2wv/gm2wv.component';
import { Gm2rComponent } from './article-view/gm2/gm2r/gm2r.component';
import { Gm2pComponent } from './article-view/gm2/gm2p/gm2p.component';
import { Gm2cgComponent } from './article-view/gm2/gm2cg/gm2cg.component';
import { Gm2hgComponent } from './article-view/gm2/gm2hg/gm2hg.component';
import { GfgbComponent } from './article-view/gf/gfgb/gfgb.component';
import { GfwvComponent } from './article-view/gf/gfwv/gfwv.component';
import { GfcsComponent } from './article-view/gf/gfcs/gfcs.component';
import { GfpComponent } from './article-view/gf/gfp/gfp.component';
import { GfespComponent } from './article-view/gf/gfesp/gfesp.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    ArticleComponent,
    ArticleViewComponent,
    ContactComponent,
    MentionComponent,
    AucunarticlesComponent,
    GM1Component,
    GM2Component,
    GFComponent,
    WorldComponent,
    EuropaComponent,
    AsiaComponent,
    OceaniaComponent,
    OrientComponent,
    AfrikaComponent,
    AmerikaComponent,
    SamerikaComponent,
    Gm1gbComponent,
    Gm1wvComponent,
    Gm1wcComponent,
    Gm1hgComponent,
    Gm2gbComponent,
    Gm2wvComponent,
    Gm2rComponent,
    Gm2pComponent,
    Gm2cgComponent,
    Gm2hgComponent,
    GfgbComponent,
    GfwvComponent,
    GfcsComponent,
    GfpComponent,
    GfespComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
