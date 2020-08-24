import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { DialogContent } from './dialog/dilog';
import { AppServiceService } from './service/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-pm-board';

    backlog=[];
    development=[];
    codeReveiw=[];
    acceptance=[];

    constructor(public dialog: MatDialog, public  appService: AppServiceService ) {}

    
    ngOnInit () {
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
    }

    addNewItem () {
        this.openDialog();
       
    }
    
    openDialog() {
        this.appService.initTask();
        const dialogRef = this.dialog.open(DialogContent, { disableClose: true });
        if(this.backlog.length>4){
            this.appService.hasError = true;
            this.appService.errMsg = 'Backlog has reached maximum number of tasks.'
        }else{
            dialogRef.afterClosed().subscribe(result => {
                console.log(`Dialog result: ${result}`);
                const newItem = JSON.parse(JSON.stringify(this.appService.newTask));
                  this.backlog.push(newItem);
              });
        }
        
    }
}


