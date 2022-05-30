import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellsComponent } from './cells/cells.component';
import { CounterComponent } from './counter/counter.component';
import { CrudComponent } from './crud/crud.component';
import { FlightBookerComponent } from './flight-booker/flight-booker.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { TimerComponent } from './timer/timer.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'counter',component: CounterComponent},
  {path:'tempConverter',component: TempConverterComponent},
  {path:'flightBooker',component: FlightBookerComponent},
  {path:'timer',component: TimerComponent},
  {path:'crud',component: CrudComponent},
  {path:'cells',component: CellsComponent},
  {path:'todo',component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
