import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit{

  constructor(
    public toastr: ToastrManager,
    private router: Router,
    private userService: UserService,
  ){}
  ngOnInit() {
    this.userService.purgeAuth();
    this.toastr.successToastr('You have logged out!', 'Logout!');
    this.router.navigateByUrl('/');
  }
}