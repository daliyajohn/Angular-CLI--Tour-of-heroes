import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HerosComponent } from './layout/heros/heros.component';

const routes: Routes = [
  { path: '', component: LayoutComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heros', component: HerosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
