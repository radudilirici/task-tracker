import {Component, OnInit} from '@angular/core';
import {Task} from '../task/Task';
import {TASKS} from '../task/mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = TASKS;

  ngOnInit() {
  }
}
