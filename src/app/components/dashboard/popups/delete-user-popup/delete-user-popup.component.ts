import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CancelPopupComponent } from '../cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';

@Component({
  selector: 'app-delete-user-popup',
  templateUrl: './delete-user-popup.component.html',
  styleUrls: ['./delete-user-popup.component.css']
})
export class DeleteUserPopupComponent {
 constructor (
  public dialog:MatDialog,
  @Inject(MAT_DIALOG_DATA) public delUserData:any){
    console.log(delUserData)
  }


  //popups for buttons within delete user pop-up components
  openLeavePagePopup() {
    const dialogRef = this.dialog.open(CancelPopupComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ${result}')
      })
    }

    openDeleteSuccessPopup() {
      const dialogRef = this.dialog.open(SuccessPopupComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ${result}')
      })
    }
}
