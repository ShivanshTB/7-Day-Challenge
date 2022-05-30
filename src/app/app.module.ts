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
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoServiceService } from './services/todo-service.service';
import { TodoComponent } from './todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TempConverterComponent,
    FlightBookerComponent,
    TimerComponent,
    CrudComponent,
    CellsComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    [AlertModule.forRoot(),],
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [DatePipe,TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
