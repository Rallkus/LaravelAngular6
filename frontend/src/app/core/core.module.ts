import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';


import {
  ApiService,
  ArticlesService,
  AuthGuard,
  CommentsService,
  JwtService,
  ProfilesService,
  TagsService,
  UserService,
  BuffsService,
  ContactService,
  GuildsService,
  PlayersService
} from './services';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    ArticlesService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    BuffsService,
    ContactService,
    UserService,
    GuildsService,
    PlayersService
  ],
  declarations: []
})
export class CoreModule { }
