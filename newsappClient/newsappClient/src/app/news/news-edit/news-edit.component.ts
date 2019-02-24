import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from '../service/news.service';
import { News } from '../news';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {
  id: string;
  newsForm: FormGroup;
  news: News;

  constructor(private router: Router, route: ActivatedRoute, private newsService: NewsService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.newsService.changeTitle('edit');
      this.newsService.getNewsById(this.id).toPromise().then((data: News) => {
        data = data[0];
        this.news = data;
        this.newsForm.setValue({
          title: data.title,
          description: data.description,
          content: data.content,
          urlToImage: data.urlToImage,
          publishedAt: data.publishedAt,
          author: data.author,
          url: data.url
        });
      });
    } else {
      this.newsService.changeTitle('create');
    }
    this.newsForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      content: new FormControl('', Validators.required),
      urlToImage: new FormControl('', Validators.required),
      publishedAt: new FormControl((new Date()).toDateString()),
      author: new FormControl('Kate', Validators.required),
      url: new FormControl('', Validators.required)
    });
  }

  onCancel(): void {
    this.router.navigate(['']);
  }

  private getDataFromForm(): News {
    const newNews: News = new News();
    newNews.author = this.newsForm.get('author').value;
    newNews.description = this.newsForm.get('description').value;
    newNews.title = this.newsForm.get('title').value;
    newNews.content = this.newsForm.get('content').value;
    newNews.urlToImage = this.newsForm.get('urlToImage').value;
    newNews.publishedAt = this.newsForm.get('publishedAt').value;
    newNews.url = this.newsForm.get('url').value;
    newNews.source = 'local';
    return newNews;
  }

  onSave(): void {
    if (this.newsForm.valid) {
      const updated: News = this.getDataFromForm();
      console.log('updated', updated);
      this.newsService.updateNews(this.id, updated).then((flag: boolean) => {
        console.log(flag);
        if (flag) {
          this.router.navigate(['']);
        }
      });
    }
  }
}
