import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-flight-booker',
  templateUrl: './flight-booker.component.html',
  styleUrls: ['./flight-booker.component.css'],
})
export class FlightBookerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {   }

  start!: Date;
  return!: Date;
  errr!: boolean;
  bookBtn: boolean = true;
  returnShow: boolean = false;
  chosen: string = 'oneWay';
  startDate!: Date;
  startAlertShow: boolean = true;
  returnAlertShow: boolean = true;
  setDate = new Date();

  startInput() {
    this.start;
    this.bookBtn = false;
  }

  returnInput() {
    if (this.return < this.start) {
      this.errr = true;
      this.bookBtn = true;
    } else {
      this.errr = false;
      this.bookBtn = false;
    }
    if (this.start == undefined || this.return == undefined) {
      this.bookBtn = true;
    }
  }

  bookFlight() {
    if (this.chosen == 'oneWay') {
      this.startAlertShow = false;
      setTimeout(() => {
        this.startAlertShow = true;
      }, 5000);
    } else {
      this.returnAlertShow = false;
      setTimeout(() => {
        this.returnAlertShow = true;
      }, 5000);
    }
  }

  chosenFun() {
    switch (this.chosen) {
      case 'oneWay':
        this.returnShow = false;
        break;
      case 'returnFlight':
        this.returnShow = true;
        break;
    }
  }
}
