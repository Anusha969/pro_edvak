import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Add this import
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { ServiceLocationsComponent } from './service-locations/service-locations.component';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ViewComponent } from './view/view.component';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,LoginComponent,ServiceLocationsComponent,ViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MenubarModule,CommonModule,ButtonModule,
    MenuModule,    
    AvatarModule,DropdownModule,TagModule,TableModule, InputTextModule, InputTextModule, 
    NgModule,
    RouterModule.forRoot(routes) // <-- Add ReactiveFormsModule here
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
