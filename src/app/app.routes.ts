// import { Routes } from '@angular/router';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';

// export const routes: Routes = [
//     {path:'/register',component:RegisterComponent},
//     {path:'/login',component:LoginComponent}
// ];
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Import your LoginComponent
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceLocationsComponent } from './service-locations/service-locations.component';
import { ViewComponent } from './view/view.component';

// Define routes in your app
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route to login
  { path: 'login', component: LoginComponent }, 
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'service-locations',component:ServiceLocationsComponent},
  {path:'view',component:ViewComponent}// Define the login route
  // Add other routes here if needed
];
