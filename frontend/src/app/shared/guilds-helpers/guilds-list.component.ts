import { Component, Input } from '@angular/core';

import { Guilds, GuildsListConfig, GuildsService } from '../../core';
@Component({
  selector: 'app-guilds-list',
  styleUrls: ['../article-helpers/article-list.component.css'],
  templateUrl: './guilds-list.component.html'
})
export class GuildsListComponent {
  guilds: Guilds;
  constructor (
    private guildsService: GuildsService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: GuildsListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: GuildsListConfig;
  results: Guilds[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }

    this.guildsService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.guilds;
      console.log(data)
      console.log(this.results);

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.guildsCount / this.limit)), (val, index) => index + 1);
    });
    /*this.guildsService.getAll()
    .subscribe(guilds => {
      this.loading=false;
      this.results=guilds;
      console.log(this.guilds);
    });*/
    /*this.articlesService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.articles;

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    });*/
  }
}