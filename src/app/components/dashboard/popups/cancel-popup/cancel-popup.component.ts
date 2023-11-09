import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cancel-popup',
  templateUrl: './cancel-popup.component.html',
  styleUrls: ['./cancel-popup.component.css']
})
export class CancelPopupComponent {

  constructor(private location:Location){}

  goBack() {
    // this.location.back();
  }
}
