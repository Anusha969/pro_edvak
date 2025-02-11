import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DrawerModule } from 'primeng/drawer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // <-- Add these imports for form handlin

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    SelectButtonModule,
    RadioButtonModule,
    MultiSelect,
    ListboxModule,
    FloatLabelModule,
    DatePickerModule,
    CheckboxModule,
    AvatarModule,
    CardModule,
    TableModule,
    AvatarGroupModule,
    MenuModule,
    ToastModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,  // <-- Add ReactiveFormsModule here
    SelectModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    DrawerModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ehr-demo';
  registrationForm!: FormGroup;  

  items = [
    {
      label: 'Options',
      items: [
        {
          label: 'Refresh',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Export',
          icon: 'pi pi-upload'
        }
      ]
    }
  ];

  // Sample Products Data
  products = [
    {
      code: "f230fh0g3",
      name: "Bamboo Watch",
      category: "Accessories",
      quantity: 10
    },
    {
      code: "nvklal433",
      name: "Black Watch",
      category: "Accessories",
      quantity: 61
    },
    {
      code: "zz21cz3c1",
      name: "Blue Band",
      category: "Fitness",
      quantity: 1
    },
    {
      code: "244wgerg2",
      name: "Blue T-Shirt",
      category: "Clothing",
      quantity: 25
    },
    {
      code: "h456wer53",
      name: "Bracelet",
      category: "Accessories",
      quantity: 73
    }
  ];

  customers = [
    {
      name: "customers",
      country: "US",
      representative: "TEST",
      status: true
    }
  ];
  
  representatives = [{ label: "edvak", name: "edvak" }];
  value = "";
  ingredient: any = '';
  visible = false;

  constructor(private primeng: PrimeNG, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.primeng.ripple.set(true);
    // Initialize the registration form
    this.registrationForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern('^[A-Za-z].{0,34}$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[A-Za-z].{0,34}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')]]
    });
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element && element.classList.toggle('dark-theme');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    }
  }
}
