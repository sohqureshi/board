import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    @Input() taskItem;
    @Input() type;

    taskList = {
      backlog:'#dc3545',
      development: '#ab5d0cfa',
      codeReveiw:'#a8ab0cfa',
      acceptance:'#2c8b22',

    }
    ngOnInit () {
      console.log(this.taskItem);
      this.taskItem.labels=[];
      this.taskItem.labels= [this.taskList[this.type]]
    }

}