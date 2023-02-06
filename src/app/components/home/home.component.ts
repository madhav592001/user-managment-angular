import { Component } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users:User[] ;  

  constructor() {
    this.users = JSON.parse(localStorage.getItem("users") || "[]") ; 
  }

  deleteUser(user:User) {
    const index = this.users.indexOf(user) ; 
    this.users.splice(index,1) ;  
    localStorage.setItem("users",JSON.stringify(this.users)) ; 
  }
}
