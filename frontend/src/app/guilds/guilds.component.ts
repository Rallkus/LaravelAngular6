import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, GuildsService, Guilds, GuildsListConfig} from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './guilds.component.html'
})
export class GuildsComponent implements OnInit{
  guilds: Guilds;
  title: String = 'Guilds';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  listConfig: GuildsListConfig = {
    type: 'all',
    filters: {}
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guildsService: GuildsService,
  ) {}
  ngOnInit() {

    
  }
  setListTo(type: string = '', filters: Object = {}) {
    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }
}