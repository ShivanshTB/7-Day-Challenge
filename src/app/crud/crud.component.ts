import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    }

  dataArr :any[]= [];
  updateBtn: Boolean = true;
  deleteBtn: Boolean = true;
  storeArr = this.dataArr;
  indexObj!: number;
  search!: string;

  nameForm = new FormGroup({
    firstname: new FormControl(''),
    surname: new FormControl('')
  })

  read(){
    if(this.nameForm.get('firstname')?.value == ""){
      alert("Please enter your details!");
    }else{
      this.dataArr.push(this.nameForm?.value);
    }
 }
   create(){
    this.read();
    this.reset();
  }

reset(){
  this.nameForm.setValue({
    firstname: '',
    surname: ''
  })
}

  select(e:any){
    this.indexObj = this.dataArr.indexOf(e)
     this.nameForm.setValue({
      firstname: e.firstname,
      surname: e.surname,
    })
    this.updateBtn = false;
    this.deleteBtn = false;
  }

  delete(){
    if(this.nameForm.get("firstname")?.value != "" || this.nameForm.get("surname")?.value != ""){
      this.dataArr.splice(this.indexObj,1);
      this.updateBtn = true;
      this.deleteBtn = true;
      this.reset();
    }else{
      alert("Please select to delete!");
    }
   
  }

  update(){
    if(this.nameForm.get("firstname")?.value !="" || this.nameForm.get("surname")?.value != ""){
      this.dataArr[this.indexObj]["firstname"] = this.nameForm.get("firstname")?.value;
    this.dataArr[this.indexObj]["surname"] = this.nameForm.get("surname")?.value;
    this.reset();
    }else{
      alert("Please select to update!");
    }
    
  }

  find(){
    let searchWord = this.search.toLowerCase();
     if(this.search){
      let save = this.dataArr.filter((res)=>{
        return res.surname.toLowerCase().includes(searchWord);
      })    
      this.dataArr = save;
    }else{
     this.dataArr = this.storeArr;
    }   
  }
}