import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerosComponent } from './heros/heros.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, HerosComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
