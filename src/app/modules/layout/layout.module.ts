import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, AngularSvgIconModule.forRoot(), SharedModule]
})
export class LayoutModule { }
