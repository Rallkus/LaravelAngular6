import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { Buffs } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class BuffsService{

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
  ) {}

  getAll(): Observable<Buffs> {
    return this.apiService.get('/buffs')
          .pipe(map(data => data.buffs));
  }

}