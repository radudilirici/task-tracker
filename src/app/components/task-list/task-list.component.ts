import { Component, OnInit } from "@angular/core";
import { Task } from "../task/Task";
import { TaskService } from "../../services/task.service";
import { TaskCreate } from "../task/Task.create";
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  subscription: Subscription;
  showAddTask: boolean = false;

  constructor(
    private taskService: TaskService,
    private uiService: UiService,
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((_showAddTask) => (this.showAddTask = _showAddTask));
  }

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  createTask(taskCreate: TaskCreate) {
    this.taskService.createTask(taskCreate).subscribe((newTask) => {
      this.tasks.push(newTask);
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe((deletedTask) => {
      this.tasks = this.tasks.filter((task) => task.id !== deletedTask.id);
    });
  }

  toggleTaskReminder(task: Task) {
    this.taskService
      .updateTask(task.id, { reminder: !task.reminder })
      .subscribe();
  }
}
