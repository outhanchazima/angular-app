import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from 'src/app/core/guards/authentication.guard';
import { DashboardComponent } from './dashboard.component';
import { UpComingComponent } from './pages/up-coming/up-coming.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authenticationGuard],
    children: [
      { path: '', redirectTo: 'upcoming', pathMatch: 'full' },
      { path: 'upcoming', component: UpComingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
