import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { News } from '../news';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {
  news: News;

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
    this.news = this.storage.get('news');
  }

  ngOnInit() {
  }

  isLocal(): boolean {
    return this.news.source === 'local';
  }

}
