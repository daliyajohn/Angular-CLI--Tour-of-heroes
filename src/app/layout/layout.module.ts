import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, HerosComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
