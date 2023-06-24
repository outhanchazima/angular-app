import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  confrimPasswordTextType!: boolean;
  isFailedSignUp!: boolean;

  validationErrors: string = ""

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.required]
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  toggleConfrimPasswordTextType() {
    this.confrimPasswordTextType = !this.confrimPasswordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password, confirmPassword } = this.signUpForm.value;

    // stop when signUpForm validation fails
    if (this.signUpForm.invalid) {
      return;
    }

    // Check if password and confirmPassword are equal then redirect the user to dashboard else show errors
    if (password === confirmPassword) {
      this.isFailedSignUp = false;
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('token', JSON.stringify("fashjhfajhfahfhkfahfkahfakfhdfja"));
      this._router.navigate(['/']);
    } else {
      this.isFailedSignUp = true;
      this.validationErrors = "Passwords dont match"
      return;
    }
  }
}
