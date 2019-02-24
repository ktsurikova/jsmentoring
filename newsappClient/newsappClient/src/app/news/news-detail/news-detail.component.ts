import { Component, OnInit, Input, Inject } from '@angular/core';
import { News } from '../news';
import { Router } from '@angular/router';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  @Input() news: News;
  // news: News;

  constructor(private router: Router, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  isLocal(): boolean {
    return this.news.source === 'local';
  }

  readMore(): void {
    this.storage.set('news', this.news);
    this.router.navigate(['/view']);
  }

}
