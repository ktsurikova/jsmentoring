import { Source } from '../source';
import { Options, NewsData, News } from '../news';
import { Observable } from 'rxjs';

export interface NewsProvider {
  getSources(): Observable<Source[]>;
  getNews(options: Options): Observable<NewsData>;
  getNewsById(id: string): Observable<News>;
  updateNews(id: string, news: News): Observable<any>;
}
