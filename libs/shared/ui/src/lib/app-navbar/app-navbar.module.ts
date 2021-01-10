import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveComponentModule } from '@ngrx/component';
import { AppNavbarComponent } from './app-navbar.component';

@NgModule({
  declarations: [AppNavbarComponent],
  exports: [AppNavbarComponent],
  imports: [CommonModule, ReactiveComponentModule, MatButtonModule],
})
export class AppNavbarModule {}
