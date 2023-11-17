import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.css']
})
export class SuccessPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private customData:any,
    private dialog:MatDialog
  ) {}

  close() {
    this.dialog.closeAll()
  }

  testimage= "../../../../../assets/icons/navbar/user-grey.svg"
  image= this.customData.img_path ?? this.testimage;
  var_header = this.customData.header ?? 'success';
  var_body = this.customData.body ?? 'kdjfa sd ksdf asdkfdf';
  var_btn_txt = this.customData.btnText ?? 'ksdjfadskf';

}

