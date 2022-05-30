import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoServiceService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: any= [];
  storeList = [];
  errMsg: string = "No task";
  dataObj: any= {};

  constructor( private taskData:TodoServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  todoText = new FormControl('');
  
  getData(){
    this.taskData.getAllTask().subscribe((data: any)=>{
      this.todoList = data;
      this.storeList = this.todoList;
    },(err)=>this.errMsg = err.message);
  }

  addTodo(){
    this.insertTodo();
    this.reset();
  }

  reset(){
    this.todoText.setValue('');
  }
  
  insertTodo(){
    this.dataObj.title = this.todoText.value;
    this.dataObj.completed = false;
    this.taskData.postTask(this.dataObj).subscribe(()=>this.getData()
    ,()=>alert("Task can't be added."));
  }

  done(id:number){
    this.dataObj = {};
  this.dataObj.completed = true;
    this.taskData.updateTask(id,this.dataObj).subscribe(()=>{
      alert("Task mared as done");
      this.getData();
    },()=>alert("Task can't be mark done."));
  }
  
  remove(id:number){
    if(confirm("Do you want to remove the task?"))
    this.taskData.deleteTask(id).subscribe(()=>{
      alert("Task removed Successfully.");
      this.getData();
    },()=>alert("Task can't be deleted."));
  }

  active(){
    this.todoList = this.storeList;
  this.todoList =  this.todoList.filter((res:any)=> res.completed == false);
  }

  comp(){
  this.todoList = this.storeList;
    this.todoList =  this.todoList.filter((res:any)=> res.completed == true);
  }
}

