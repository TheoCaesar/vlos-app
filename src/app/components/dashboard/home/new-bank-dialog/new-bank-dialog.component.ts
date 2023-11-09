import { Component } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CancelPopupComponent } from '../../popups/cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../../popups/success-popup/success-popup.component';


@Component({
  selector: 'app-new-bank-dialog',
  templateUrl: './new-bank-dialog.component.html',
  styleUrls: ['./new-bank-dialog.component.css']
})
export class NewBankDialogComponent {
  // logo= new FormControl((""), [Validators.required])
  constructor(private _formBuilder: FormBuilder, public dialog:MatDialog) {}

  openLeavePagePopup() {
    const dialogRef = this.dialog.open(CancelPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }

  openSuccessPopup() {
    const dialogRef = this.dialog.open(SuccessPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }

}
