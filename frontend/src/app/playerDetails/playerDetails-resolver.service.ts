import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PlayerDetails, PlayersService, UserService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PlayerDetailsResolver implements Resolve<PlayerDetails> {
  constructor(
    private playersService: PlayersService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.playersService.getPlayerDetails(route.params['slug'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
