import { Component, Inject } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CancelPopupComponent } from '../../popups/cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../../popups/success-popup/success-popup.component';

@Component({
  selector: 'app-edit-user-component',
  templateUrl: './edit-user-component.component.html',
  styleUrls: ['./edit-user-component.component.css']
})
export class EditUserComponentComponent {

  // email= new FormControl((""), [Validators.required, Validators.email])
  // user_role= new FormControl((""), [Validators.required])

  editUserForm !: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) private editUserData:any) {
      console.log(editUserData)
      this.editUserForm = this._formBuilder.group({
        editFname: [editUserData.firstname, Validators.required],
        editLname: [editUserData.lastname, Validators.required],
        editMail: [editUserData.mail, Validators.required],
        editPhone: [editUserData.phone, Validators.required],
        editRole: [editUserData.role, Validators.required],
        // Add other form fields and validations as needed
      });
    }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

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
