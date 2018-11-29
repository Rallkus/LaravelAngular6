import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors } from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './buffs.component.html'
})
export class BuffsComponent{
  title: String = 'Buffs';
  errors: Errors = {errors: {}};
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
}