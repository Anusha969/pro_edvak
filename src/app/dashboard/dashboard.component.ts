// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { Menu } from 'primeng/menu'; 
// import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core'; 
// import { AvatarModule } from 'primeng/avatar';


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss'],
//    schemas: [CUSTOM_ELEMENTS_SCHEMA],
//    imports : [AvatarModule]
// })
// export class DashboardComponent implements OnInit {

//   items: any[] = [];
//   menu!: Menu;  // Declare menu as a Menu type

//   constructor() {}

//   ngOnInit(): void {
//     this.items = [
//       { label: 'Profile', icon: 'pi pi-fw pi-user' },
//       { label: 'Logout', icon: 'pi pi-fw pi-sign-out' }
//     ];
//   }
//   toggleMenu(event: Event) {
//     if (this.menu) {
//       this.menu.toggle(event);
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Menu } from 'primeng/menu';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core'; 
 import { AvatarModule } from 'primeng/avatar';
 import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports : [AvatarModule,CommonModule]
})
export class DashboardComponent implements OnInit {
  items: any[]=[];  // For p-menu model
  sidebarVisible: boolean = true; 
  menu!: Menu; // To control the sidebar visibility

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Profile', icon: 'pi pi-fw pi-user' },
      { label: 'Logout', icon: 'pi pi-fw pi-sign-out' }
    ];
  }

  // Toggle sidebar visibility
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  toggleMenu(event: Event) {
        if (this.menu) {
           this.menu.toggle(event);
         }
      }

}
