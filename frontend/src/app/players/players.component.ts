import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, Guilds} from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './players.component.html'
})
export class PlayersComponent implements OnInit{
  players: Guilds;
  title: String = ':slug';
  errors: Errors = {errors: {}};
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.route.data.subscribe(
      (data: { players: Guilds }) => {
        this.players = data.players;
      }
    );
    console.log(this.players);
  }
}