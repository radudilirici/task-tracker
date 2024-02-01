import {Component, Input, OnInit} from '@angular/core';
import {Task} from './Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  @Input('task') task: Task | undefined;

  ngOnInit() {
  }
}
