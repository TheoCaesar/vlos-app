import { Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';
import { Router } from '@angular/router';
import { FIUser } from 'src/app/interfaces/fiUser';
import { CancelPopupComponent } from '../cancel-popup/cancel-popup.component';

@Component({
  selector: 'app-bank-status-popup',
  templateUrl: './bank-status-popup.component.html',
  styleUrls: ['./bank-status-popup.component.css']
})
export class BankStatusPopupComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) private customData:any, private dialog:MatDialog, private bankService:UserService, private router:Router){}

  ngOnInit(): void {
    this.onGetBank();
  }

  bankID = this.customData.fiID;
  fi_name = this.customData.fiName;
  fiShortName = this.customData.shortName;
  fiCode = this.customData.code;
  fiType = this.customData.type;
  benAcctNum = this.customData.acctNumber ?? 10935164329123;
  benBankName = this.customData.bankName ;
  fiSwiftCode = this.customData.swift ?? this.fiCode[3] + this.fiShortName;
  btn_text:string  = (this.customData.trigger === 'toggle') ? (this.customData.status === 'deactivated') ? 'reactivate' : 'deactivate' : 'delete'

  queriedBank!:FIUser;

  onGetBank() {
    // if (this.customData.trigger = 'toggle') {
    //   this.btn_text = (this.customData.status)

    // }
    this.bankService.getBankObj(this.bankID).subscribe({
      next:(response) => {
        console.log(response);
        this.queriedBank = response;
      },
      error(err) {console.log("error", err)},
      complete() {console.log("onGetBank() complete")}
    })
  }

  openLeavePagePopup(){
    const leaveDialog = this.dialog.open(CancelPopupComponent);
  }

  confirm() {
    //we dont delete -- we only mark as deleted
      this.onUpdateBankStatus()
  }

  onUpdateBankStatus() {
    //copy queried bank object
    const updatedBank = this.queriedBank;

    this.btn_text === 'reactivate' ? updatedBank.status = 'active' :  updatedBank.status = this.btn_text + 'd';
    updatedBank.modifiedDate =new Date().toString()

    this.bankService.updateBank(this.bankID, updatedBank).subscribe({
      next:(response)=> {
        //log success
        console.log(response);
        //open dialog
        const successDialog = this.dialog.open(SuccessPopupComponent, {
          data: {
            parent_component: 'update-bank-status',
            img_path: (updatedBank.status === 'active') ? "../../../../../assets/icons/popups/check-green.svg" : "../../../../../assets/icons/popups/check-red.svg",
            header: 'Success',
            body: `Bank ${this.btn_text}d successfully`,
            btnText: 'Close'
          }
        })

        //close dialog in X secs
        setTimeout(() => {
          this.dialog.closeAll();
          this.router.navigateByUrl('dashboard/banks')
        }, 2500);
      },
      error(err) {console.log('Error => ', err)},
      complete() { console.log('Bank Deletion Succesful!')}
    })
  }
}
