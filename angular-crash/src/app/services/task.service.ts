import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { environment } from 'src/environments/environment';

const httpOptions= {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private apiUrl = 'http://localhost:5000/tasks';
  private url = 'http://localhost:8080/task/';


  constructor(private http: HttpClient) { }

  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks;
  // }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.url + task.id);
  } 

  updateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

}
