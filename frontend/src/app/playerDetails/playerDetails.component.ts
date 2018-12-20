import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, PlayerDetails} from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './playerDetails.component.html'
})
export class PlayerDetailsComponent implements OnInit{
  @Input() player: PlayerDetails;
  title: String = ':slug';
  errors: Errors = {errors: {}};
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.route.data.subscribe(
      (data: { player: PlayerDetails }) => {
        console.log(data);
        this.player = data.player;
      }
    );
    console.log(this.player);
  }
}