import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countForm = new FormGroup({
    countBox: new FormControl(0)
  });

  onclick(){
    this.countForm.setValue({
      countBox: this.countForm.value.countBox + 1
    })
  }
  reset(){
    this.countForm.setValue({
      countBox: this.countForm.value.countBox = 0
    })
  }
}
