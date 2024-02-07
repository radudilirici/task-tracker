import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TaskCreate } from "../task/Task.create";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrl: "./add-task.component.css",
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TaskCreate> =
    new EventEmitter<TaskCreate>();

  text?: string;
  day?: string;
  reminder: boolean = false;

  constructor() {
    this.resetValues();
  }

  ngOnInit() {}

  resetValues() {
    this.text = "";
    this.day = "";
    this.reminder = false;
  }

  onSubmit() {
    if (!this.text) {
      window.alert("Please enter a task name.");
      return;
    }
    if (!this.day) {
      window.alert("Please select a date for the task.");
      return;
    }

    const newTask: TaskCreate = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.resetValues();
  }
}
