import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/core/constants/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  isFailedSignIn!: boolean;

  validationErrors: string = ""

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.signInForm.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.signInForm.value;

    // stop when signInForm validation fails
    if (this.signInForm.invalid) {
      return;
    }

    // Check if email and password equal email from credential enum emaul if true redirect else raise error
    if (email === Credentials.EMAIL && password === Credentials.PASSWORD) {
      localStorage.setItem('token', JSON.stringify("fashjhfajhfahfhkfahfkahfakfhdfja"));
      localStorage.setItem("email", JSON.stringify(email))
      this._router.navigate(['/']);
    } else {
      this.isFailedSignIn = !this.isFailedSignIn;
      this.validationErrors = "invalid credentials"
      return;
    }

  }
}
