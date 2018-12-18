import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, GuildsService, Guilds} from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './guilds.component.html'
})
export class GuildsComponent implements OnInit{
  guilds: Guilds;
  title: String = 'Guilds';
  errors: Errors = {errors: {}};
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guildsService: GuildsService,
  ) {}
  ngOnInit() {

    this.guildsService.getAll()
    .subscribe(guilds => {
      this.guilds=guilds;
      console.log(this.guilds);
    });
    
  }
}