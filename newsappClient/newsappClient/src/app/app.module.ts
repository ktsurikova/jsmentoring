import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsTabComponent } from './news/news-tab/news-tab.component';
import { NewsViewComponent } from './news/news-view/news-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    NewsListComponent,
    NewsEditComponent,
    NewsTabComponent,
    NewsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
