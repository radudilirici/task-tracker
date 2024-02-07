import { Injectable } from "@angular/core";
import { Task } from "../components/task/Task";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TaskCreate } from "../components/task/Task.create";
import { TaskUpdate } from "../components/task/Task.update";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private baseTasksUrl = "http://localhost:5678/tasks";

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseTasksUrl);
  }

  createTask(taskCreate: TaskCreate): Observable<Task> {
    return this.httpClient.post<Task>(
      this.baseTasksUrl,
      taskCreate,
      httpOptions,
    );
  }

  updateTask(id: string, taskUpdate: TaskUpdate): Observable<Task> {
    return this.httpClient.patch<Task>(
      `${this.baseTasksUrl}/${id}`,
      taskUpdate,
      httpOptions,
    );
  }

  deleteTask(id: string): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.baseTasksUrl}/${id}`);
  }
}
