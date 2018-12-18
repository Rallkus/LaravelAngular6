import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Guilds } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayersService {
  constructor (
    private apiService: ApiService
  ) {}


  get(slug): Observable<Guilds> {
    return this.apiService.get('/guilds/' + slug)
      .pipe(map(data => data.guilds));
  }


}