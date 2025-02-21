// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   imports: [],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.scss'
// })
// export class RegisterComponent {

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  registrationService: any;

  constructor(private fb: FormBuilder) {
    // Initialize the form with form controls and validators
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Any additional logic after component initialization
  }

  // onSubmit(): void {
  //   if (this.registrationForm.valid) {
  //     console.log(this.registrationForm.value);
  //     // Handle registration logic here
  //   }
  //   else{
  //     console.log("form is valid");
  //   }
  // }
  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const formData = this.registrationForm.value;
    this.registrationService.registerUser(formData).subscribe(
      (response: any) => {
        console.log('User registered successfully:', response);
        alert('Registration successful!');
      },
      (error: any) => {
        console.error('Error registering user:', error);
        alert('An error occurred while registering. Please try again.');
      }
    );
  }
}
