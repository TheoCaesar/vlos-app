import { Component, Inject } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CancelPopupComponent } from '../../popups/cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../../popups/success-popup/success-popup.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent {

  email= new FormControl((""), [Validators.required, Validators.email])
  user_role= new FormControl((""), [Validators.required])

  constructor(private router:Router, private homeService:UserService, private _formBuilder: FormBuilder, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) private editUserData:any) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // create_user_form = new FormGroup(
  //   {
  //     fname : new FormControl(""),
  //     lname: new FormControl(""),
  //     email : new FormControl((""), [Validators.required, Validators.email]),
  //     phone: new FormControl(""),
  //     user_role : new FormControl((""), [Validators.required])
  //   }
  // )

  create_user_form: FormGroup = this._formBuilder.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    user_role: ['maker', Validators.required], // Set a default value
  });


  createUser() {
    console.log(this.create_user_form.value) //- success
    if (this.create_user_form.valid) {
      const newUser:User = {
        firstname : this.create_user_form.get('fname')?.value,
        lastname : this.create_user_form.get('lname')?.value,
        phoneNumber : this.create_user_form.get('phone')?.value,
        email : this.create_user_form.get('email')?.value,
        role : this.create_user_form.get('user_role')?.value,
        createdDate: new Date().toString(),
        createdBy: 'Super Admin',
        password: "jqkwet104hgq",
        remember: true,
        status: 'New'
      }
      const dataParam = {
        parent_component: 'new-user',
        img_path: "../../../../../assets/icons/popups/check-green.svg",
        header: 'Success',
        body : 'New user added successfully',
        btnText: 'Close'
      }

      console.log(newUser)
      if (newUser.role === 'maker') {
        this.homeService.createMakerObj(newUser).subscribe({
          next: (response)=> {
            console.log(response);
            this.openSuccessPopup(dataParam)
          },
          error(err) { console.log(err)},
          complete() { console.log("createuser() successful")}
        })
      } else {
        this.homeService.createCheckerObj(newUser).subscribe({
          next: (response)=> {
            console.log(response);
            this.openSuccessPopup(dataParam)


          },
          error(err) { console.log(err)},
          complete() { console.log("createuser() successful")}
        })
      }

      setTimeout(() => {
        this.dialog.closeAll()
      }, 2000);

      this.router.navigateByUrl('dashboard/'+newUser.role)

    } else { console.log('form invalid')}
  }

  openLeavePagePopup() {
    const dialogRef = this.dialog.open(CancelPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }

  openSuccessPopup(argdata:object) {
    const dialogRef = this.dialog.open(SuccessPopupComponent, argdata);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }
}
