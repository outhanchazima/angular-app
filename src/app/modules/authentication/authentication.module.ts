import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularSvgIconModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
