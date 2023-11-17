import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CancelPopupComponent } from '../cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user-popup',
  templateUrl: './delete-user-popup.component.html',
  styleUrls: ['./delete-user-popup.component.css']
})
export class DeleteUserPopupComponent {
 constructor ( private userService:UserService, private router:Router,
  public dialog:MatDialog,
  @Inject(MAT_DIALOG_DATA) public delUserData:any){
    console.log(delUserData)
  }

  deleteUser() {
    if (this.delUserData.role === 'maker') {
      this.userService.deleteMaker(this.delUserData.id).subscribe({
        next: (response) => {
          console.log(response);
        },
        error(err) {console.log("delete User() error", err)},
        complete() {console.log("DeleteUserComponent() successful")}
      })
      this.openDeleteSuccessPopup();
      this.router.navigateByUrl('/dashboard/maker')
    }
    else {
      this.userService.deleteChecker(this.delUserData.id).subscribe({
        next: (response) => {
          console.log(response);
        },
        error(err) {console.log("delete User() error", err)},
        complete() {console.log("DeleteUserComponent() successful")}
      })
      this.openDeleteSuccessPopup();
      this.router.navigateByUrl('/dashboard/checker')
    }
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

    setTimeout(() => {
      dialogRef.close();
    }, 2500);
    dialogRef.afterClosed().subscribe(result => {
      this.dialog.closeAll();
      console.log('Dialog result: ${result}')
    })
  }


}
