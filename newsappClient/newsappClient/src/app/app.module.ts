import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
