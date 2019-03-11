import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgbdCarouselConfig } from './carousel-config';
import { HorizontalSliderModule } from 'angular2-horizontal-slider';

@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselConfig
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgbModule,
    HorizontalSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
