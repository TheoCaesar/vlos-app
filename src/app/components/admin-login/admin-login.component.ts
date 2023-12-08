import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private adminAuthService:AuthService, private routeUser:Router) {}

  //create a formGroup
  signInForm = new FormGroup (
    {
      user_email: new FormControl((""), [Validators.required, Validators.email]),
      user_password: new FormControl((""), [Validators.required]),
      user_role: new FormControl((""), [Validators.required]),
      remember_me: new FormControl((true))
    }
  )

  //submit funciton
  onSubmit() {
    if (this.signInForm.valid) {
      //get keyed values
      let mail = String(this.signInForm.value.user_email);
      let password =String(this.signInForm.value.user_password);
      let role = String(this.signInForm.value.user_role);

      let myUser = this.adminAuthService.signIn(mail, password, role);
      (myUser) ? this.routeUser.navigateByUrl("verify-admin-login") : alert("Invalid username or password!")
    }
  }
}
