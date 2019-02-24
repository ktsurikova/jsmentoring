import { NewsData, Options, News } from '../news';
import { Source } from '../source';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewsProvider } from './news-provider';
import { NewsApiProviderImpl } from './news-api-provider-impl';
import { NewsLocalProviderImpl } from './news-local-provider-impl';
import { HttpClient } from '@angular/common/http';
import { NewsPage, PageSize } from './news-page';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // newsData: News[];
  private newsApiProviderImpl: NewsProvider;
  private newsLocalProviderImpl: NewsProvider;
  private newsSourceSubject = new Subject<any>();
  private newsSubject = new Subject<NewsData>();
  private search: string;
  private local: boolean;
  private source: Source;

  constructor(http: HttpClient) {
    this.newsApiProviderImpl = new NewsApiProviderImpl(http);
    this.newsLocalProviderImpl = new NewsLocalProviderImpl(http);
  }

  getSources(): Observable<Source[]> {
    return this.newsApiProviderImpl.getSources();
  }

  getNews(): Observable<NewsData> {
    return this.newsSubject.asObservable();
    // return this.newsLocalProviderImpl.getNews(options);
  }

  loadMore(newsPage: NewsPage): void {
    this.getNewsFromProvider(newsPage);
  }

  getNewsSource(): Observable<any> {
    return this.newsSourceSubject.asObservable();
  }

  changeNewsSource(source: Source) {
    if (source.name !== 'local') {
      this.local = false;
    }
    this.source = source;
    this.newsSourceSubject.next(source);
    this.getNewsFromProvider();
  }

  changeTitle(title: string) {
    this.newsSourceSubject.next({name: title});
  }

  changeSearch(search: string) {
    this.search = search;
    this.getNewsFromProvider();
  }

  changeLocal(local: boolean) {
    this.local = local;
    if (local) {
      this.newsSourceSubject.next({name: 'local'});
    } else {
      this.newsSourceSubject.next(this.source);
    }
    this.getNewsFromProvider();
  }

  getNewsById(id: string): Observable<News> {
    return this.newsLocalProviderImpl.getNewsById(id);
  }

  private getNewsFromProvider(newsPage?: NewsPage): void {
    const options: Options = new Options();
    const nextPage: number = newsPage ? newsPage.getNextPage() : undefined;
    options.page = nextPage ? nextPage : 1;
    options.pageSize = PageSize;
    options.sourceId = this.source ? this.source.id : undefined;
    options.q = this.search;
    if (this.local) {
      this.newsLocalProviderImpl.getNews(options).toPromise().then(data => {
        data.currentPage = options.page;
        this.newsSubject.next(data);
      });
    } else {
      this.newsApiProviderImpl.getNews(options).toPromise().then(data => {
        data.currentPage = options.page;
        this.newsSubject.next(data);
      });
    }
  }

  async updateNews(id: string, news: News): Promise<boolean> {
    const data = await this.newsLocalProviderImpl.updateNews(id, news).toPromise();
    return data.updated ? true : false;
  }
}
