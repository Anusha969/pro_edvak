// src/app/locations/service-locations.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

// Define the Location model directly here
interface Location {
  id: number;
  name: string;
  country: string;
  representative: string;
  status: string;
  verified: boolean;
  activeFromDate: string;
  allowCalls: boolean;
  notes: string;
}

@Component({
  selector: 'app-service-locations',
  templateUrl: './service-locations.component.html',
  styleUrls: ['./service-locations.component.css'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[CommonModule,ButtonModule,FormsModule,TagModule,TableModule]
 
})
// export class ServiceLocationsComponent implements OnInit {
//   locations: Location[] = [];  // List of locations
//   visible: boolean = false;    // Drawer visibility flag
//   loading: boolean = true;     // Loading state for the table

//   private apiUrl = 'https://api.example.com/locations'; // Replace with your actual API URL

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.loadLocations();  // Load the locations when component initializes
//   }

//   // Fetch locations from the API
//   loadLocations() {
//     this.http.get<Location[]>(this.apiUrl).subscribe({
//       next: (locations) => {
//         this.locations = locations;
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error loading locations:', err);
//         this.loading = false;
//       }
//     });
//   }
//   filter(event: any) {
//     // You can access the selected value from event.value
//     console.log('Selected values:', event.value);
//     // Perform your filtering logic here
//   }
// }
export class ServiceLocationsComponent {
  // Sample representative data for the multiselect
  representatives = [
    { name: 'John Doe', image: 'john.jpg' },
    { name: 'Jane Smith', image: 'jane.jpg' },
    { name: 'Mark Johnson', image: 'mark.jpg' }
  ];

  // Sample customer data for the table
  customers = [
    { id: 1, name: 'Customer 1', country: 'USA', representative: 'John Doe', status: 'Active', verified: true },
    { id: 2, name: 'Customer 2', country: 'Canada', representative: 'Jane Smith', status: 'Inactive', verified: false },
    { id: 3, name: 'Customer 3', country: 'UK', representative: 'Mark Johnson', status: 'Active', verified: true }
  ];

  // The visible flag for the drawer
  visible = false;

  // Handle the change in the multiselect filter
  filter(event: any) {
    console.log('Selected values from multiselect:', event.value);
    // Add your filtering logic here based on the selected values
  }
}