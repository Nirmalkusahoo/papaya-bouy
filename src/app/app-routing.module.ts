import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ArticleComponent} from './components/article/article.component';
import {AboutComponent} from './components/about/about.component';
import {PostComponent} from './components/post/post.component';
import {BlogComponent} from './components/blog/blog.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'post', component: PostComponent},
  {path: 'blogs', component: BlogComponent},

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule,
      ),
  },
  {
    path: 'dsa',
    loadChildren: () =>
      import('./modules/dsa/dsa.module').then(
        (m) => m.DsaModule,
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
