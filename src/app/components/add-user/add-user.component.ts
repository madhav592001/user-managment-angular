import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {

  name:String; 
  age:number; 
  department:String;
  bloodGrp:String;
  address:String; 
  contact:String; 

  constructor(private router: Router) { 
  }

  onSubmit() {
    const users = JSON.parse(localStorage.getItem("users")||"[]") ; 

    const user={
      sno:users.length+1,
      name:this.name,
      age:this.age,
      department:this.department,
      bloodGrp:this.bloodGrp,
      address:this.address,
      contact:this.contact,
    }

    users.push(user) ; 
    localStorage.setItem("users",JSON.stringify(users)) ; 

    console.log("saved")
    this.router.navigate(['/'])

  }

}
