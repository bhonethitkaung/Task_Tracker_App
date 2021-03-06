import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => {
        this.tasks = tasks;
        console.log(tasks);
      }
    );
  }

  deleteTask(task: Task): void {
    console.log(task.id);
    // this.taskService.deleteTask(task).subscribe(
    //   () => this.tasks = this.tasks.filter(t => t.id != task.id)
    // );
    this.taskService.deleteTask(task).subscribe(
      () => {
        console.log(task);
        this.getTasks();
      }
    );
  } 

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(
      // (task) => (this.tasks.push(task))
      () => {
        this.getTasks();
      }
      
    );
    
  }

}
