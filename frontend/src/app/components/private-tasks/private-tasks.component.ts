import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.sass']
})
export class PrivateTasksComponent implements OnInit {

  privateTasks = [];

  constructor(private taskService: TasksService  ) { }



  ngOnInit() {
    this.getPrivateTasks(); 
  }

  getPrivateTasks(){
    this.taskService.getPrivate()
    .subscribe(
      res =>{ this.privateTasks = res},
      err =>{ console.error(err)}
    );
  }

}
