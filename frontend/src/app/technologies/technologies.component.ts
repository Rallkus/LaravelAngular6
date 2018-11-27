import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors } from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './technologies.component.html'
})
export class TechnologiesComponent{
  title: String = 'Technologies';
  errors: Errors = {errors: {}};
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
}