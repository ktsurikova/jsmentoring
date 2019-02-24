import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from './news/service/news.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  subscription: Subscription;
  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.subscription = this.newsService.getNewsSource().subscribe((data: any) => {
      this.title = data.name;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
