import { Component, OnInit } from '@angular/core';
import  {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css'],
})
export class TempConverterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  tempForm = new FormGroup({
    cel: new FormControl(''),
    feh: new FormControl('')
  });

  onInputCel() {
      this.tempForm.patchValue({
        feh: Number(((this.tempForm.get("cel")?.value) * (9/5) + 32).toFixed(2))
      })
    
    }

  onInputFeh() {
      this.tempForm.patchValue({
        cel: Number(((this.tempForm.get("feh")?.value -32)*(5/9)).toFixed(2))
      })
  }
}
