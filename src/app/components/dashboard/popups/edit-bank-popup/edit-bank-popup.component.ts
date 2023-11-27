import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';
import { FIUser } from 'src/app/interfaces/fiUser';
import { CancelPopupComponent } from '../cancel-popup/cancel-popup.component';

@Component({
  selector: 'app-edit-bank-popup',
  templateUrl: './edit-bank-popup.component.html',
  styleUrls: ['./edit-bank-popup.component.css']
})
export class EditBankPopupComponent implements OnInit {
  queriedBankObj!:FIUser;
  bankID:number = this.editBankData.fiID;

  constructor(private router:Router, private _formBuilder: FormBuilder, public dialog:MatDialog, private homeService: UserService,
    @Inject(MAT_DIALOG_DATA) private editBankData:any ) {}

  editBankForm: FormGroup= this._formBuilder.group({
    edit_fiType: [this.editBankData.type, Validators.required],
    edit_fiName: [this.editBankData.fiName, Validators.required],
    edit_fiShortName: [this.editBankData.shortName, Validators.required],
    edit_fiCode: [this.editBankData.code, Validators.required],
    // fiLogo: [this.editBankData., Validators.required], // Set a default value
    edit_bankAcctNum: [this.editBankData.acctNumber, Validators.required],
    edit_bankName: [this.editBankData.bankName, Validators.required],
    edit_swiftCode: [this.editBankData.swift, Validators.required],
  })

  ngOnInit() {
    console.log("bank ID --> ", this.bankID)

    this.onGetBankObj();
  }


  onGetBankObj() {
    console.log("bank ID --> ", this.bankID)
    if(this.editBankForm.valid) {
      this.homeService.getBankObj(this.editBankData.fiID).subscribe({
        next: (query_response) => {
          this.queriedBankObj = query_response;
          console.log(this.queriedBankObj, query_response)
        },
        error(err) {console.log(err)},
        complete() {console.log("getBankObj() successful")}
      })
    } else {
      console.log("Invalid Form!")
    }

  }

  onUpdateBankObj(id:number, bankData:FIUser) {
    this.homeService.updateBank(id, bankData).subscribe({
      next: (query_response) => {
        console.log(query_response);
        this.openSuccessPopup();
      },
      error(err) {console.log(err)},
      complete() {console.log("onUpdateBankObj() completed!")}
    })
  }

  updateBank() {
    if (this.editBankForm.valid) {
      console.log(this.editBankForm.value, this.queriedBankObj)
      const updatedBankObj:FIUser = {
        ...this.queriedBankObj,
        fi_type : this.editBankForm.get('edit_fiType')?.value,
        fi_name : this.editBankForm.get('edit_fiName')?.value,
        fi_shortName : this.editBankForm.get('edit_fiShortName')?.value,
        fi_code : this.editBankForm.get('edit_fiCode')?.value,
        accountNumber : this.editBankForm.get('edit_bankAcctNum')?.value,
        bankName : this.editBankForm.get('edit_bankName')?.value,
        swiftCode : this.editBankForm.get('edit_swiftCode')?.value,
        modifiedDate:new Date().toString()

      }

      this.onUpdateBankObj(this.bankID, updatedBankObj);
    }
  }

  openSuccessPopup() {
    const dialogRef = this.dialog.open(SuccessPopupComponent, {
      data : {
        parent_component: 'edit-user',
        img_path: "../../../../../assets/icons/popups/check-green.svg",
        header: 'Success',
        body : 'Bank updated successfully',
        btnText: 'Close'
      }
    } );

    setTimeout(() => {
      this.dialog.closeAll();
      window.location.reload();
    }, 2000);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

  openLeavePagePopup() {
    const dialogRef = this.dialog.open(CancelPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
      window.location.reload()
    })
  }
}
