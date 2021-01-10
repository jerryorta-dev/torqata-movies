import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedDataAccessModule } from '@tor/shared/data-access';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    // Data - Ngrx Reducers, Effects, Firebase Connections
    SharedDataAccessModule,

    AppRoutingModule,
  ],
  providers: [

    // To get environment in lazy loaded modules
    {
      provide: 'ENVIRONMENT',
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
