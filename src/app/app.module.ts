import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './taskList/taskList.component';
import { MatDialogModule,MatFormFieldModule, MatButtonModule, MatInputModule, MatRippleModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { DialogContent } from './dialog/dilog';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DialogContent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogContent],
})
export class AppModule { }
