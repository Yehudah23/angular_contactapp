import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewcontactComponent } from './newcontact/newcontact.component';

export const routes: Routes = [

    {path:'new',component:SignupComponent},
    {path:'user',component:SigninComponent},
    {path:'info',component:DashboardComponent},
    {path:'contactpage',component:ContactpageComponent},
    {path:'contactpage2',component:NewcontactComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'newcontacts',component:NewcontactComponent},
];
   
