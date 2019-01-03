import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit{

  ngOnInit() {
    console.log("aa");
  }
}