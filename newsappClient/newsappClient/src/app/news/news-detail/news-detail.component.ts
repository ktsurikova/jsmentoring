import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news: News;

  constructor() { }

  ngOnInit() {
    // this.news = new News();
    // this.news.author = 'Kate';
    // this.news.content = 'SOmthwkjfldksjlksdjlk\ndsfafeafwefeafaefaew\nargwEFFRAHGJGAJHFAJH,. FGAFB. \n AWHGKJAHRKJ';
    // this.news.description = 'Akjdskhfjkdfanfadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddskljkljkljlkjsdlfhrgahfbrekjvanfjakhfjkjsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddhkjhjkhjhkjhkjhkhfkjhkjhkjhkjhkjhkjhkjhk';
    // this.news.publishedAt = new Date();
    // this.news.title = 'Titek1 dafgf';
    // this.news.url = 'title-fdsjk';
    // this.news.urlToImage = 'https://isme.ie/wp-content/uploads/2018/07/banner_add_news.jpg';
    // this.news.source = {};
    // this.news.source.isLocal = true;
  }

}
