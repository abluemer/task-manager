import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { appRouting, routingComponents } from './app.routing';
import { TaskService } from './services/task-service/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditTaskComponent,
    TaskListComponent,
    TaskItemComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    HttpClientJsonpModule,
    appRouting
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
