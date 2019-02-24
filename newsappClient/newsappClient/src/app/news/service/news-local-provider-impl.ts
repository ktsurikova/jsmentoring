import { NewsProvider } from './news-provider';
import { Source } from '../source';
import { NewsData, Options, News } from '../news';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export class NewsLocalProviderImpl implements NewsProvider {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getSources(): Observable<Source[]> {
    const source: Source = new Source();
    source.id = 'local';
    source.name = 'local';
    return of([source]);
  }

  getNews(options: Options): Observable<NewsData> {
    const url = 'http://localhost:3000/news';
    return this.http.get<NewsData>(url);
  }

  getNewsById(id: string): Observable<News> {
    const url = `http://localhost:3000/news/${id}`;
    return this.http.get<News>(url);
  }

  updateNews(id: string, news: News): Observable<any> {
    const url = `http://localhost:3000/news/${id}`;
    return this.http.put<News>(url, news);
  }
}
