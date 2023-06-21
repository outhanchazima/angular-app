import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResponsiveHelperComponent } from './components/responsive-helper/responsive-helper.component';



@NgModule({
  declarations: [
    ResponsiveHelperComponent
  ],
  imports: [CommonModule],
  exports: [ResponsiveHelperComponent]
})
export class SharedModule { }
