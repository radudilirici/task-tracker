import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Task } from "./Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent implements OnInit {
  @Input("task") task!: Task;
  @Output() onDeleteTask = new EventEmitter<string>();
  @Output() onToggleTaskReminder = new EventEmitter<Task>();
  faTimes = faTimes;

  ngOnInit() {}

  onDelete(id: string) {
    this.onDeleteTask.emit(id);
  }

  onToggleReminder(task: Task) {
    this.onToggleTaskReminder.emit(task);
    this.task.reminder = !this.task.reminder;
  }
}
