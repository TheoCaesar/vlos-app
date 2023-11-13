import { Component, Inject ,OnInit} from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CancelPopupComponent } from '../../popups/cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../../popups/success-popup/success-popup.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-edit-user-component',
  templateUrl: './edit-user-component.component.html',
  styleUrls: ['./edit-user-component.component.css']
})
export class EditUserComponentComponent {

  editUserForm !: FormGroup;
  queriedUserObj!:User;

  constructor(private homeService:UserService, private _formBuilder: FormBuilder, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) private editUserData:any) {
      // console.log(editUserData)
      this.editUserForm = this._formBuilder.group({
        editFname: [editUserData.firstname, Validators.required],
        editLname: [editUserData.lastname, Validators.required],
        editMail: [editUserData.mail, Validators.required],
        editPhone: [editUserData.phone, Validators.required],
        editRole: [editUserData.role, Validators.required],
        // Add other form fields and validations as needed
      });
  }

  openLeavePagePopup() {
    const dialogRef = this.dialog.open(CancelPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }

   ngOnInit(){
    this.onGetUserObj();
  }

  //get method
   onGetUserObj() {
    this.homeService.getCheckerObj(this.editUserData.userID).subscribe({
      next: (var_response) => {
        this.queriedUserObj = var_response;
        console.log("Queried User", this.queriedUserObj);
      },
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done getting user instance ')}         //fxn run on completion
    });
  }

  //put methods
  onUpdateUserObj() {
    this.homeService.updateChecker(this.queriedUserObj).subscribe({
      next(var_response){ console.log("updated subscription", var_response); },     //next - process data sent by observable
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done updating existing user ')}         //fxn run on completion
    });
  }


  updateUser() {
    if (this.editUserForm.valid) {
      const updatedUser = {
        ...this.queriedUserObj,
        firstname: this.editUserForm.get('editFname')?.value,
        lastname: this.editUserForm.get('editLname')?.value,
        mail: this.editUserForm.get('editMail')?.value,
        phone: this.editUserForm.get('editPhone')?.value,
        role: this.editUserForm.get('editRole')?.value,
        modifiedDate:new Date().toString()
        // Add other properties as needed
      };

      // Assuming your data service has an update method
      this.onUpdateUserObj();

      this.openSuccessPopup();

      // Close the dialog or perform any other actions needed
    }
  }

  openSuccessPopup() {
    const dialogRef = this.dialog.open(SuccessPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })

    this.dialog.closeAll();
  }
}
