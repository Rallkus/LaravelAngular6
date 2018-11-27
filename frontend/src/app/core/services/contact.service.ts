import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { Contact } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class ContactService {
  private currentContactSubject = new BehaviorSubject<Contact>({} as Contact);
  public currentContact = this.currentContactSubject.asObservable().pipe(distinctUntilChanged());

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
  ) {}

  sendEmail(contact): Observable<Contact> {
    return this.apiService.post('/contact', {contact: contact})
      .pipe(map(
      data => {
        console.log(data);
        return data;
      }
    ));
  }

}