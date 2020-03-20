import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks = [];

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.getCommonTasks();
  }


  getCommonTasks(){
    this.tasksService.getTasks()
    .subscribe(
      res =>{
        console.log(res);
        this.tasks = res;
      },
      err=>{ console.log('Error: ', err )}
      );
  }


}
