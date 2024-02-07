import { Component } from "@angular/core";
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  title = "Task Tracker";

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router,
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((_showAddTask) => (this.showAddTask = _showAddTask));
  }

  async toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  showButton(): boolean {
    return this.router.url === "/";
  }
}
