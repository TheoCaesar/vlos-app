import { Component } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-bank-dialog',
  templateUrl: './new-bank-dialog.component.html',
  styleUrls: ['./new-bank-dialog.component.css']
})
export class NewBankDialogComponent {
  // logo= new FormControl((""), [Validators.required])

  constructor(private _formBuilder: FormBuilder) {}
}
