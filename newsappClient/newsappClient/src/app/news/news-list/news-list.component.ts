import { Component, OnInit, OnDestroy } from '@angular/core';
import { News, NewsData } from '../news';
import { NewsService } from '../service/news.service';
import { NewsPage } from '../service/news-page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnDestroy {
  newsData: News[];
  newsPage: NewsPage = new NewsPage();
  subscription: Subscription;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
   this.newsPage.currentPage = 0;
   this.subscription = this.newsService.getNews().subscribe(news => {
     console.log('news', news);
     if (news.currentPage === 1) {
       this.newsData = news.news;
     } else {
       news.news.forEach(n => this.newsData.push(n));
     }
     this.fillNewsPage(news);
   });
  }

  isloadMoreEnabled() {
    const flag = this.newsPage ? this.newsPage.loadMore() : false;
    console.log('flag', flag);
    return flag;
  }

  loadMore() {
    if (this.isloadMoreEnabled()) {
      this.newsService.loadMore(this.newsPage);
      // this.newsService.getNews(this.newsPage).subscribe(news => {
      //   console.log('news', news);
      //   news.news.forEach(n => this.newsData.push(n));
      //   this.fillNewsPage(news.totalResults);
      // });
    }
  }

  fillNewsPage(newsData: NewsData) {
    this.newsPage.totalResults = newsData.totalResults;
    this.newsPage.currentPage = newsData.currentPage;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
