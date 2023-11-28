import { Component } from '@angular/core';

@Component({
  selector: 'app-maker-header',
  templateUrl: './maker-header.component.html',
  styleUrls: ['./maker-header.component.css']
})
export class MakerHeaderComponent {
  solv_logo = '../../../../assets/Picture1.png';
  notificationIcon = './../../../../assets/icons/navbar/notification.svg'
  userIcon = './../../../../assets/icons/navbar/user-grey.svg'
}
