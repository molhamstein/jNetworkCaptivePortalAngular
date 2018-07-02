import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Component, Inject } from '@angular/core';

@Component({
    selector: 'dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss']
})
export class DialogComponent {
    title;
    containt;

    constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title = data.title;
        this.containt = data.containt;
    }

     cansel() {
        this.dialogRef.close(false);
    }
        closeModal(){
        this.dialogRef.close();
    }
}
