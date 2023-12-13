import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ArticleComponent} from './components/article/article.component';
import {AboutComponent} from './components/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {INTERCEPTOR_PROVIDERS} from './modules/shared-module/interceptors/interceptor-providers';
import { BlogComponent } from './components/blog/blog.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    AboutComponent,
    ContactFormComponent,
    PostComponent,
    BlogComponent,
  ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatCardModule, MatButtonModule
    ],
  providers: [INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {
}
