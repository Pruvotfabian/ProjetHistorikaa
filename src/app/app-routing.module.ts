import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Page404Component } from './page404/page404.component';
import { ArticleComponent } from './article/article.component';
import { NewComponent } from './new/new.component';
import { ContactComponent } from './contact/contact.component';
import { MentionComponent } from './mention/mention.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'home',  component: AccueilComponent },
  { path: 'article',  component: ArticleComponent },
  { path: 'nouvelle-article',  component: NewComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'mention',  component: MentionComponent },
  { path: '**', component: Page404Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }