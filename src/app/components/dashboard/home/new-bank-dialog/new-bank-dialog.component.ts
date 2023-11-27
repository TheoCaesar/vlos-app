import { Component, Inject } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CancelPopupComponent } from '../../popups/cancel-popup/cancel-popup.component';
import { SuccessPopupComponent } from '../../popups/success-popup/success-popup.component';
import { FIUser } from 'src/app/interfaces/fiUser';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bank-dialog',
  templateUrl: './new-bank-dialog.component.html',
  styleUrls: ['./new-bank-dialog.component.css']
})
export class NewBankDialogComponent {
  // logo= new FormControl((""), [Validators.required])
  constructor(private router:Router, private _formBuilder: FormBuilder, public dialog:MatDialog, private homeService: UserService) {}

  create_bank_form: FormGroup = this._formBuilder.group({
    fiType: ['', Validators.required],
    fiName: ['', Validators.required],
    fiShortName: ['', Validators.required],
    fiCode: ['', Validators.required],
    // fiLogo: ['', Validators.required], // Set a default value
    bankAcctNum: ['', Validators.required],
    bankName: ['', Validators.required],
    swiftCode: ['', Validators.required],
  });

  uploadedFileName:string | undefined;


  createBank() {
    console.log(this.create_bank_form.value)
    if (this.create_bank_form.valid) {
      const newBank:FIUser = {
        fi_name : this.create_bank_form.get('fiName')?.value,
        fi_shortName : this.create_bank_form.get('fiShortName')?.value,
        fi_code : this.create_bank_form.get('fiCode')?.value,
        fi_type : this.create_bank_form.get('fiType')?.value,
        accountNumber : this.create_bank_form.get('bankAcctNum')?.value,
        bankName:  this.create_bank_form.get('bankName')?.value,
        swiftCode: this.create_bank_form.get('swiftCode')?.value,
        createdBy: 'SCF Admin',
        createdDate:  new Date().toString(),
        password: "1t34fg4tq4",
        status: "active",
        role: "FI"
      }

      const dataParam = {
        parent_component: 'new-bank',
        img_path: "../../../../../assets/icons/popups/check-green.svg",
        header: 'Success',
        body : 'New FI added successfully',
        btnText: 'Close'
      }

      this.homeService.createBankObj(newBank).subscribe({
        next: (response)=> {
          console.log(response);
          this.openSuccessPopup(dataParam)
        },
        error(err) { console.log(err)},
        complete() { console.log("createuser() successful")}
      })

      setTimeout(() => {
        this.dialog.closeAll()
      }, 2000);

      this.router.navigateByUrl('dashboard/banks')
    }
  }


  openLeavePagePopup() {
    const dialogRef = this.dialog.open(CancelPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }

  openSuccessPopup(dataArg:any) {
    const dialogRef = this.dialog.open(SuccessPopupComponent, dataArg);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }

}
