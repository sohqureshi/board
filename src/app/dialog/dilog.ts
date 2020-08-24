import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppServiceService } from '../service/app-service.service';

@Component({
    selector: 'dialog-content-example-dialog',
    styleUrls: ['./dialog.scss'],
    templateUrl: 'dialog-content-example-dialog.html',
  })
  export class DialogContent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public appService: AppServiceService){
    }

  }