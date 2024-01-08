import { Component } from '@angular/core';
import { LogincheckService } from '../logincheck.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  reqdata: any;
  Message: any;

  user = {
    username: '',
    password: '',
  };

  constructor(
    private logincheckservice: LogincheckService,
    private router: Router
  ) {}

  // Submit() {
  //   // Swal.fire({
  //   //   title: 'Auto close alert!',
  //   //   text: `You have Succefully Submited the form. ${this.user.empemail}, ${this.user.adharno}`,
  //   //   icon: 'success',
  //   // });

  //   this.logincheckservice.getApiData(this.user).subscribe((data) => {
  //     console.log(data);
  //     this.reqdata = data;
  //   });

  //   this.reqdata === true
  //     ? (this.Message = 'No User Found!! Please Register first')
  //     : (this.Message = 'You have succefully LoggedIn');
  // }

  Submit() {
    this.logincheckservice.getApiData(this.user).subscribe((data) => {
      console.log(data);
      this.reqdata = data;

      if (this.reqdata === true) {
        Swal.fire({
          title: 'Auto close alert!',
          text: `You have Succefully Submited the form.`,
          icon: 'success',
        });
        this.router.navigate(['/landingpage']);
        this.Message = 'You have successfully Logged In';
      } else {
        Swal.fire({
          title: 'Auto close alert!',
          text: `Wrong email or Password`,
          icon: 'error',
        });
        this.Message = 'No User Found!! Please Register first';
      }
    });
  }
}
