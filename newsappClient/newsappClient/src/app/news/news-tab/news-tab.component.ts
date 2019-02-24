import { Component, OnInit } from '@angular/core';
import { Source } from '../source';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-tab',
  templateUrl: './news-tab.component.html',
  styleUrls: ['./news-tab.component.css']
})
export class NewsTabComponent implements OnInit {
  sources: Source[];
  selectedSource: Source;
  search: string;
  local: boolean;
  constructor(private newsService: NewsService) { }
  ngOnInit() {
    this.newsService.getSources().subscribe(sources => {
      console.log('sources', sources);
      this.sources = sources;
      this.selectedSource = sources[0];
      this.onSourceChange(this.selectedSource);
    });
  }
  onSourceChange(newValue: any) {
    console.log('source changed', newValue);
    this.newsService.changeNewsSource(newValue);
  }
  onSearchChange(newValue: any) {
    console.log('onSearchChange', newValue);
    this.newsService.changeSearch(newValue);
  }
  onLocalChange(newValue: any) {
    console.log('onLocalChange', newValue);
    this.newsService.changeLocal(newValue);
  }
}
