import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public route:Router){}

  emails=''
  passwords=''

  signIn(){
    let users = localStorage.getItem('user')

    if(users){
      let storedusers = JSON.parse(users);

      let userFound = storedusers.find((user:any) =>
      user.email === this.emails && user.password === this.passwords);

      if(userFound){
        alert('welcome to the page');
        this.route.navigate(['/info'])
      } else{
        alert('Invalid email or password');
      }


    
    }
    else{
      alert('No user found')
    }
 
 
  }
}
