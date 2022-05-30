import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { todos } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService { 

   url = "https://todo-backend-laravel.herokuapp.com/api";
   
  constructor(private http:HttpClient) { }

  getAllTask(){
    return this.http.get(this.url).pipe(
      catchError((error:any)=> throwError(error))
      )
  }

  postTask(data: todos){
    return this.http.post(this.url,data).pipe(
      catchError((error:any)=> throwError(error))
      )
  }
  deleteTask(id: Number){
    return this.http.delete(this.url+"/"+id).pipe(
      catchError((error:any)=> throwError(error))
      )
  }

  updateTask(id:number,data:any){
    return this.http.patch(this.url+"/"+id,data).pipe(
      catchError((error:any)=> throwError(error))
      )
  }
}
