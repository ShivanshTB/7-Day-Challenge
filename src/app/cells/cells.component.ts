import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css']
})
export class CellsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.rowNum();          
  }

  aplhabets: String[] = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  nums:Number[] = [];
  rowPlant!: any;
  cellPlant!: any;
  pCell!: any;

   rowNum(this: any){
      let num = 0;
      for(let i=0;i<100;i++){
        if(num != 99){
          num = i;
          this.nums.push(num);
        }               
      }
    }
    
    createRange(number:any){
      return new Array(number);    
    }

    rowIn(nn:any){
      this.rowPlant = 'a'+nn;
    }
   
cellIn(e:any){
  this.cellPlant = e;
}

inputBlur(){
  var findRow = document.getElementById(this.rowPlant)
   this.pCell = findRow?.getElementsByTagName("td");
   var rav = this.pCell[this.cellPlant+1]?.firstChild;
   var inValue = rav.value;
   if(eval(inValue) == undefined){
     rav.value = "";
   }else{
     rav.value = eval(inValue);
   }
}
}
