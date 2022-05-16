import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    }

  name!: String;
  surname!: String;
  dataArr :any[]= [];
  updateBtn: Boolean = true;
  deleteBtn: Boolean = true;
  dataObj : any = {"Name":"","Surname":""};
  storeArr = this.dataArr;
  indexObj!: number;
  search!: string;
  showSearch : Boolean = false;
  toShow: Boolean = true;

  read(){
    if(this.name != "" || this.surname != ""){
      this.dataObj = {"Name":this.name,"Surname": this.surname};
      this.dataArr.push(this.dataObj);
    }else{
      alert("Please entered your details!")
    }
 }
   create(){
    this.read();
    this.reset();
  }

reset(){
  this.name = "";
  this.surname = "";
}
  select(e:any){
     this.indexObj = this.dataArr.findIndex(function(index){
       return index.Name == e.Name && index.Surname ==e.Surname
     })
    this.name = e.Name;
    this.surname = e.Surname;
    this.updateBtn = false;
    this.deleteBtn = false;
  }

  delete(){
    this.dataArr.splice(this.indexObj,1);
    this.reset();
  }

  update(){
    this.dataArr[this.indexObj]["Name"] = this.name;
    this.dataArr[this.indexObj]["Surname"] = this.surname;
    this.reset();
  }

  find(){
    let searchWord = this.search.toLowerCase();
     if(this.search){
      let save = this.dataArr.filter((res)=>{
        return res.Surname.toLowerCase().includes(searchWord);
      })    
      this.dataArr = save;
    }else{
     this.dataArr = this.storeArr;
    }   
  }
}