import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public dialog: MatDialog) { }

  sampleDialog(title, containt, withRefrech: boolean = false) {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { title: title, containt: containt }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (withRefrech == true) {
        location.reload();
      }
    });
  }


  somthingError(mainMessage) {
    // this.APIServe.setErrorCode(0);
    this.sampleDialog(mainMessage, "هناك مشكلة ما")
  }
}
