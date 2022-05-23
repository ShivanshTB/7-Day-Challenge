import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css'],
})
export class TempConverterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cel!: number;
  feh!: number;
  onInputCel() {
    if(this.cel == undefined){
      this.cel = 0;
    }
      this.feh = this.cel * (9 / 5) + 32;
      this.feh = Number(this.feh.toFixed(2));
  }
  onInputFeh() {
    if(this.feh == undefined){
      this.feh = 0;
    }
      this.cel = (this.feh - 32) * (5 / 9);
      this.cel = Number(this.cel.toFixed(2));
   
  }
}
