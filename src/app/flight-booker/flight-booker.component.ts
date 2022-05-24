import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-flight-booker',
  templateUrl: './flight-booker.component.html',
  styleUrls: ['./flight-booker.component.css'],
})
export class FlightBookerComponent implements OnInit {
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  startDate!: Date;
  returnDate!: Date;
  status!: string;
  chosen: string = 'oneWay';
  display!: string;
  setDate = new Date();
  maxDate!: Date;
  rShow: boolean = false;
  alertBox!: string;

  dateForm = new FormGroup({
    start: new FormControl('', Validators.required),
    return: new FormControl(''),
  });
  startInput() {
    this.startDate = this.dateForm.get('start')?.value;
  }

  returnInput() {
    this.returnDate = this.dateForm.get('return')?.value;
    this.maxDate = this.dateForm.get('return')?.value;
    if (this.returnDate < this.startDate) {
      this.status = 'err';
      this.dateForm.controls['return'].setErrors({ invalid: true });
    } else {
      this.status = 'show';
    }
  }

  bookFlight() {
    if (this.chosen == 'oneWay') {
      this.display = 'show';
      this.alertBox = `You have booked one-way flight on: ${this.datePipe.transform(
        this.startDate,
        'dd-MM-yyyy'
      )}`;
      setTimeout(() => {
        this.display = 'noShow';
      }, 5000);
    } else {
      this.display = 'show';
      this.alertBox = `You have booked your flight on:  ${this.datePipe.transform(
        this.startDate,
        'dd-MM-yyyy'
      )}  and return flight on:  ${this.datePipe.transform(
        this.returnDate,
        'dd-MM-yyyy'
      )}`;
      setTimeout(() => {
        this.display = 'noShow';
      }, 5000);
    }
  }

  chosenFun() {
    switch (this.chosen) {
      case 'oneWay':
        this.rShow = false;
        this.dateForm.patchValue({
          return: this.dateForm.get('return')?.clearValidators(),
        });
        break;

      case 'returnFlight':
        this.rShow = true;
        this.dateForm.patchValue({
          return: this.dateForm
            .get('return')
            ?.setValidators(Validators.required),
        });
        break;
    }
  }
}
