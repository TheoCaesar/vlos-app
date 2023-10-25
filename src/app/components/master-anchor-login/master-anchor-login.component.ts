import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-master-anchor-login',
  templateUrl: './master-anchor-login.component.html',
  styleUrls: ['./master-anchor-login.component.css']
})
export class MasterAnchorLoginComponent {
  constructor(private adminAuthService:AuthService) {}

  onSignOut() {
    this.adminAuthService.signOut()
  }
}
