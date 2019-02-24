import { NewsProvider } from './news-provider';
import { Source } from '../source';
import { NewsData, News, Options } from '../news';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class NewsApiSourcesResponse {
  status: string;
  sources: Source[];
}

class NewApiNewsResponse {
  status: string;
  totalResults: number;
  articles: News[];
}

export class NewsApiProviderImpl implements NewsProvider {
  private apiKey = '9412f748f1da48ea91dc092f9e37a498';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getSources(): Observable<Source[]> {
    const url = `https://newsapi.org/v2/sources`;
    let params = new HttpParams();
    params = params.append('apiKey', this.apiKey);
    return this.http.get<NewsApiSourcesResponse>(url, { params }).pipe(map(res => {
      if (res.status !== 'ok') {
        return [];
      }
      return res.sources;
    }));
  }

  getNews(options: Options): Observable<NewsData> {
    const url = 'https://newsapi.org/v2/top-headlines';
    let params = new HttpParams();
    params = params.append('apiKey', this.apiKey);
    if (options.sourceId) {
      params = params.append('sources', options.sourceId);
    }
    if (options.q) {
      params = params.append('q', options.q);
    }
    if (options.page) {
      params = params.append('page', options.page.toString());
    }
    if (options.pageSize) {
      params = params.append('pageSize', options.pageSize.toString());
    }
    return this.http.get<NewApiNewsResponse>(url, { params }).pipe(map(res => {
      console.log(res.totalResults);
      if (res.status !== 'ok') {
        return null;
      }
      const newsData: NewsData = new NewsData();
      newsData.news = res.articles;
      newsData.totalResults = res.totalResults;
      return newsData;
    }));
  }

  getNewsById(id: string): Observable<News> {
    throw new Error('Method not implemented.');
  }

  updateNews(id: string, news: News): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
