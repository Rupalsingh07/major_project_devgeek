import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name:any = "Pragya" 
  email:any ="pragya.1822it1156@kiet.edu"
  rollNo: any =1802913142
  contact:any =8763457897
  department:any="IT"
  team: any = "devgeek"
  imageUrl:any
  
  constructor() { 
   // this.userName=localStorage.getItem('userName')
  }

  ngOnInit(): void {
    // this.authService.getProfile().subscribe({
     
    //   next:(res:any)=>{
    //    console.log("profile",res);
    //    this.name=res.name;
    //    this.email=res.email;
    //    this.band=res.band;
    //    this.contact=res.phone_no;
    //    this.deloitte_id=res.deloitte_emp_id;
    //    this.hasedIn_id=res.hashedin_emp_id;
    //    this.department=res.department;
    //    this.designation=res.designation;
    //    this.dateOfJoining=res.date_of_joining;
    //    this.imageUrl=res.profile_pic;
    //   },
    //   error:(err:any)=>{
    //     console.log(err)
    //   }
    //    })
  }


}
