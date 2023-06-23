import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UpComingComponent } from './pages/up-coming/up-coming.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UpComingComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ]
})
export class DashboardModule { }
