import { Component } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
submitForm() {
throw new Error('Method not implemented.');
}
  user = {
    name: '',
    password: ''
  };

  constructor(private registerService: RegisterService) { }

  registerUser() {
    this.registerService.registerUser(this.user)
      .subscribe(
        data => {
          console.log('User successfully registered!', data);
          // Optionally, you can navigate to a success page or reset the form
          this.user = {
            name: '',
            password: ''
          };
        },
        error => {
          console.error('Error registering user!', error);
        }
      );
  }
}
