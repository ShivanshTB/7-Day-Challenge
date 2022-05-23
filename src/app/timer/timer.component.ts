import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {

  constructor() {}

  sec: number = 0;
  rangeValue: number = 30;

  ngOnInit(): void {
   this.startTimer();
  }
  startTimer(){
    const set = setInterval(() => {
      this.sec++;
      if (this.sec >= this.rangeValue) {
        clearInterval(set);
      }
    },1000);
  }
  resetTime(){
    this.sec = 0;
    this.startTimer();
  }
  changeRange(){
    this.startTimer();
  }
}
