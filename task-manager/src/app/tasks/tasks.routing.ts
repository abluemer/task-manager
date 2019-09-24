import {Routes} from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {EditTaskComponent} from './edit-task/edit-task.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TasksComponent} from './tasks.component';

export const tasksRoutes :Routes = [
  {path: '', component: TaskListComponent},
  {path: 'edit/:id', component: EditTaskComponent},
  {path: 'new', component: EditTaskComponent},
];

export const tasksRoutingComponents = [TasksComponent, TaskListComponent, TaskItemComponent, EditTaskComponent];
