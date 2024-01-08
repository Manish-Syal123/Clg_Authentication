import { Component } from '@angular/core';
import { PostdataService } from '../postdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };
  constructor(private savedataservice: PostdataService) {}

  Submit() {
    Swal.fire({
      title: 'Auto close alert!',
      text: `You have Succefully Submited the form. ${this.user.username}, ${this.user.email}`,
      icon: 'success',
    });

    this.savedataservice.saveData(this.user).subscribe((data) => {
      console.log(data);
    });
  }
}
