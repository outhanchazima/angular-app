import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponsiveHelperComponent } from './components/responsive-helper/responsive-helper.component';


@NgModule({
  declarations: [
    ResponsiveHelperComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ResponsiveHelperComponent]
})
export class SharedModule { }
