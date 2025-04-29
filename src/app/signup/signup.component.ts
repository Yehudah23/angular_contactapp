import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public route:Router){}

  fullname=''
  email=''
  password=''

  userArray:any[]=[]

  ngOnInit(){
    this.userArray = JSON.parse(localStorage.getItem('user') !) || []
  }

signup(){

  let user = {
    id: this.userArray.length +1,
    fullname:this.fullname,
    email:this.email,
    password:this.password
  }

  this.userArray.push(user)
  localStorage.setItem('user',JSON.stringify(this.userArray))
  console.log(user)


  this.route.navigate(['/open'])
}
}
