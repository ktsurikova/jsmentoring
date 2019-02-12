import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsCollection: News[];

  constructor() { }

  ngOnInit() {
    this.newsCollection = [];
    let n: News = new News();
    n.author = 'Kate';
    n.content = 'SOmthwkjfldksjlksdjlk\ndsfafeafwefeafaefaew\nargwEFFRAHGJGAJHFAJH,. FGAFB. \n AWHGKJAHRKJ';
    n.description = 'Akjdskhfjkdfanfadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddskljkljkljlkjsdlfhrgahfbrekjvanfjakhfjkjsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddhkjhjkhjhkjhkjhkhfkjhkjhkjhkjhkjhkjhkjhk';
    n.publishedAt = new Date();
    n.title = 'Titek1 dafgf';
    n.url = 'title-fdsjk';
    n.urlToImage = 'https://isme.ie/wp-content/uploads/2018/07/banner_add_news.jpg';
    n.source = {};
    n.source.isLocal = true;
    for (let i = 0; i < 5; i++) {
        this.newsCollection.push(n);
    }
  }

}
