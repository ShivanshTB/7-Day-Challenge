import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { FlightBookerComponent } from './flight-booker/flight-booker.component';
import { TimerComponent } from './timer/timer.component';
import { CrudComponent } from './crud/crud.component';
import { CellsComponent } from './cells/cells.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TempConverterComponent,
    FlightBookerComponent,
    TimerComponent,
    CrudComponent,
    CellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
