import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, BuffsService, Buffs} from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './buffs.component.html'
})
export class BuffsComponent implements OnInit{
  buffs: Buffs;
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
      this.buffs=buffs;
      console.log(this.buffs);
    });
    
  }
}