// import { Component,OnInit } from '@angular/core';
// import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
// import { ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'] ,
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],encapsulation: ViewEncapsulation.None, // Corrected typo here
// })
// export class LoginComponent implements OnInit {
//   ngOnInit() {
//     console.log("Login Component Loaded");
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';// Import Router
import { ButtonModule } from 'primeng/button';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:[ButtonModule,CommonModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email is required and should be in email format
      password: ['', [Validators.required, Validators.minLength(6)]] // Password is required and should be at least 6 characters long
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      // Handle the form submission here (e.g., send login data to the server)
      console.log('Login Successful:', this.loginForm.value);
      
      // Redirect to the dashboard if login is successful
      this.router.navigate(['/dashboard']);  // Navigate to the dashboard route

      // You can also use a service to validate login credentials before redirecting:
      // this.authService.login(this.loginForm.value).subscribe(response => {
      //   if (response.success) {
      //     this.router.navigate(['/dashboard']);
      //   } else {
      //     console.log('Login failed');
      //   }
      // });
    } else {
      console.log('Form is invalid');
    }
  }
  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
