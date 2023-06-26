import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SwahiliTranslationPipe } from 'src/app/core/pipes/swahili-translator.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { MovieSuggestionsComponent } from './components/movie/movie-suggestions/movie-suggestions.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SuggestionsComponent } from './pages/suggestions/suggestions.component';
import { UpComingComponent } from './pages/up-coming/up-coming.component';
import { MovieService } from './services/movie.service';



@NgModule({
  declarations: [
    DashboardComponent,
    UpComingComponent,
    MovieCardComponent,
    SwahiliTranslationPipe,
    MovieSuggestionsComponent,
    SuggestionsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [MovieService],
})
export class DashboardModule { }
