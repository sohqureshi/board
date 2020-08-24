import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }
  hasError:boolean = false;
  errMsg:any='';
  newTask:any={
    name: 'Task ' + Math.floor(Math.random() * 1001),
    labels: ['#61bd4f'],
    desc:'',
    dueDate: new Date().toISOString(),
    asignee: 'boki'
    };

  initTask(){
    this.hasError = false;
    this.errMsg = ''
    this.newTask = {
      name: 'Task ' + Math.floor(Math.random() * 1001),
      labels: ['#61bd4f'],
      desc:'',
      dueDate: new Date().toISOString(),
      asignee: 'user'
    }
  }
}
