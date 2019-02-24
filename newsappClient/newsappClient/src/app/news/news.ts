export class Options {
  sourceId: string;
  q: string;
  pageSize: number;
  page: number;
}

export class News {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
  source: any;
}

export class NewsData {
  news: News[];
  totalResults: number;
  currentPage: number;
}
