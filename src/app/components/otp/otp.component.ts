import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  otpInput = ""
  formValid=true;
  constructor(private router:Router) {}

  move(var_event:any, prev:any, current:any, nxt:any) {
    console.log(var_event)
    let length = current.value.length;
    let maxLength = current.getAttribute('maxlength')
    if (length == maxLength){
      if (nxt != "noNxt") {
        this.otpInput += current.value;
        console.log(this.otpInput)
        nxt.focus()
      }
    }
    if (var_event.key == "Backspace"){
      if (prev != "noPrev") {
        prev.focus();
        this.otpInput = this.otpInput.slice(0, -1)
      } else {this.otpInput = ""}
    }
    if (length == maxLength && nxt == "noNxt") {
      console.log("form is valid, please verify")
      this.formValid = false;
      console.log(this.otpInput += current.value)
    }
  }

  onSubmit(){
      const enteredOTP = this.otpInput;

      const staticOTP = '8994';

      if (enteredOTP === staticOTP) {
        // OTP is correct, handle the verification success
        console.log('Verification successful');
        this.router.navigate(['dashboard/checker'])
      } else {
        // Incorrect OTP, handle the verification failure
        console.log('Verification failed', enteredOTP , staticOTP);
        window.alert('Verification failed');
      }
  }
}

/*
export class VerificationComponent implements OnInit {
  otpForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.otpForm = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: ['', Validators.required],
      input4: ['', Validators.required],
    });
  }


  onSubmit() {
  const enteredOTP = this.otpForm.value.input1 + this.otpForm.value.input2 +
                     this.otpForm.value.input3 + this.otpForm.value.input4;

  const staticOTP = '8994';

  if (enteredOTP === staticOTP) {
    // OTP is correct, handle the verification success
    console.log('Verification successful');
  } else {
    // Incorrect OTP, handle the verification failure
    console.log('Verification failed');
  }
}*/
