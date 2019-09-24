import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Task, createInitialTask } from 'src/app/models/task-interface';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task-service/task.service';
import { Title } from '@angular/platform-browser';
import { map, filter, mergeMap } from 'rxjs/operators';
import * as model from '../../models/task-interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy  {

  model = model;

  task: Task = createInitialTask();

  saved = false;

  @ViewChild(NgForm, null) form: NgForm;

  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private router: Router,
              private titleService: Title,
              private location: Location) {
  }

  ngOnInit() {

    this.subscription = this.route.params.pipe(
      map(params => params['id']),
      filter(id => id !== undefined),
      mergeMap(id => this.taskService.getTask(id)))
      .subscribe((task: Task) => {
        this.task = task;
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  saveTask() {
    this.taskService.saveTask(this.task).subscribe(task => {
      this.saved = true;
      const relativeUrl = this.router.url.includes('edit') ? '../..' : '..';
      this.router.navigate([relativeUrl], {relativeTo: this.route});
    });
  }

  cancel() {
    this.location.back();
    return false;
  }

  canDeactivate(): boolean {
    if (this.saved || !this.form.dirty) {
      return true;
    }
    return window.confirm(`Ihr Formular besitzt ungespeicherte Änderungen, möchten Sie die Seite wirklich verlassen?`);
  }

}
