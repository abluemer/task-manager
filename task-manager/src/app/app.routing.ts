import {Routes, RouterModule} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {tasksRoutes, tasksRoutingComponents} from './tasks/tasks.routing';

export const appRoutes: Routes = [
  {path: 'tasks', children: tasksRoutes}
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const routingComponents = [...tasksRoutingComponents];

