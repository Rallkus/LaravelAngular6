import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, BuffsService} from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './buffs.component.html'
})
export class BuffsComponent implements OnInit{
  title: String = 'Buffs';
  errors: Errors = {errors: {}};
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private buffsService: BuffsService,
  ) {}
  ngOnInit() {
    this.buffsService.getAll()
    .subscribe(buffs => {
      console.log(buffs);
    });
    
  }
}