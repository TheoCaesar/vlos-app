import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelPopupComponent } from '../cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';

@Component({
  selector: 'app-delete-user-popup',
  templateUrl: './delete-user-popup.component.html',
  styleUrls: ['./delete-user-popup.component.css']
})
export class DeleteUserPopupComponent {
 constructor (public dialog:MatDialog){}

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
