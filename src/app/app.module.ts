import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BerlinClockComponent } from './berlin-clock/berlin-clock.component';
import { BerlinClockService } from './berlin-clock/berlin-clock.service';

@NgModule({
  declarations: [
    AppComponent,
    BerlinClockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BerlinClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
