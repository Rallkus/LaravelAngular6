import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Players, PlayersService, UserService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PlayersResolver implements Resolve<Players> {
  constructor(
    private playersService: PlayersService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.playersService.get(route.params['slug'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
