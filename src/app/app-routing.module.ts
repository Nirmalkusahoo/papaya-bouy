import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ArticleComponent} from './components/article/article.component';
import {AboutComponent} from './components/about/about.component';
import {PostComponent} from './components/post/post.component';
import {DsaQsListComponent} from './components/dsa-qs-list/dsa-qs-list.component';
import {DsaTopicListComponent} from './components/dsa-topic-list/dsa-topic-list.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'post', component: PostComponent},
  {path: 'dsa-list/:id', component: DsaQsListComponent},
  {path: 'list', component: DsaTopicListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
