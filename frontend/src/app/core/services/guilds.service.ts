import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { Guilds } from '../models';
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

}