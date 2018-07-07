import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  private params = {};
  constructor(public dialog: MatDialog, private router: Router) { }

  setParams(params) {
    this.params = params;
  }
  getParams() {
    return this.params;
  }
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


  goTo(newURL, isLocal: boolean = true) {
    if (isLocal)
      this.router.navigate([newURL]);
    else
      window.location.href = newURL;
  }

  somthingError(mainMessage) {
    // this.APIServe.setErrorCode(0);
    this.sampleDialog(mainMessage, "هناك مشكلة ما")
  }
}
