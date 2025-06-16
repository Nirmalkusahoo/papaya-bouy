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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {INTERCEPTOR_PROVIDERS} from './modules/shared-module/interceptors/interceptor-providers';
import {BlogComponent} from './components/blog/blog.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {StarRatingComponent} from './components/projects/star-rating/star-rating.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ProgressBarComponent} from './components/projects/progress-bar/progress-bar.component';
import {FolderComponent} from './components/projects/folder-struture/folder/folder.component';
import {FolderStrutureComponent} from './components/projects/folder-struture/folder-struture.component';
import {TestComponent} from './components/test/test.component';
import { AutoCompleteSearchBarComponent } from './components/projects/auto-complete-search-bar/auto-complete-search-bar.component';
import { AutoCompleteComponent } from './components/projects/auto-complete-search-bar/auto-complete/auto-complete.component';
import { TabFormComponent } from './components/projects/tab-form/tab-form.component';
import { ProfileComponent } from './components/projects/tab-form/profile/profile.component';
import { SettingsComponent } from './components/projects/tab-form/settings/settings.component';
import { IntrestComponent } from './components/projects/tab-form/intrest/intrest.component';
import { PaginationExampleComponent } from './components/projects/pagination-example/pagination-example.component';
import { ProductCardComponent } from './components/projects/pagination-example/product-card/product-card.component';
import { PaginationComponent } from './components/projects/pagination-example/pagination/pagination.component';

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
    StarRatingComponent,
    ProgressBarComponent,
    FolderComponent,
    FolderStrutureComponent,
    AutoCompleteSearchBarComponent,
    AutoCompleteComponent,
    TabFormComponent,
    ProfileComponent,
    SettingsComponent,
    IntrestComponent,
    PaginationExampleComponent,
    ProductCardComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, TestComponent, FormsModule, NgOptimizedImage
  ],
  providers: [INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {
}
