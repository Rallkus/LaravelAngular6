import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { Guilds, GuildsListConfig } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class GuildsService{

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
  ) {}

  getAll(): Observable<Guilds> {
    return this.apiService.get('/guilds')
          .pipe(map(data => data.guilds));
  }
  query(config: GuildsListConfig): Observable<{guilds: Guilds[], guildsCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/guilds',
      new HttpParams({ fromObject: params })
    );
  }

}