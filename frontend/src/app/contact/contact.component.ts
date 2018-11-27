import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

import { Errors, ContactService} from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './contact.component.html'
})
export class ContactComponent{
  title: String = 'Contact';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  contactForm: FormGroup;

  constructor(
    public toastr: ToastrManager,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {
    // use FormBuilder to create a form group
    this.contactForm = this.fb.group({
      'email': ['', Validators.required],
      'name': ['', Validators.required],
      'subject': ['', Validators.required],
      "commentary": ['', Validators.required]
    });
  }

  submitForm() {
    console.log(this.contactForm.value);

    const credentials = this.contactForm.value;
    this.contactService
    .sendEmail(credentials)
    .subscribe(
      data => {
        this.toastr.successToastr('Your email has been sent', 'Success!');
        this.router.navigateByUrl('/');
      },
      err => {
        this.toastr.errorToastr('An error has been ocurred', 'Oops!');
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
}