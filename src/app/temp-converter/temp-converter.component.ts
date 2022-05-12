import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css'],
})
export class TempConverterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cel!: any;
  cToF!: any;
  feh!: any;
  fToC!: any;
  onInputCel() {
    if (this.cel == 0) {
      this.cToF = 0;
    } else {
      console.log(this.cel);
      let c = this.cel;
      this.cToF = c * (9 / 5) + 32;
      this.cToF = this.cToF.toFixed(2);
      console.log(this.cToF);
    }
  }
  onInputFeh() {
    if (this.feh == 0) {
      this.fToC = 0;
    } else {
      console.log(this.feh);
      let f = this.feh;
      this.fToC = (f - 32) * (5 / 9);
      this.fToC = this.fToC.toFixed(2);
      console.log(this.fToC);
    }
  }
  focusC() {
    if (this.fToC) {
      this.fToC = '';
    }
  }
  focusF() {
    if (this.cToF) {
      this.cToF = '';
    }
  }
}
