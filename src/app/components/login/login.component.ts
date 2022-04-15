import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    role:new FormControl('',Validators.required)
  })

  constructor(private route:ActivatedRoute, private router:Router, private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value)
    if(this.loginForm.value.role=='Team Member')
    {
      this.router.navigate(['member/dashboard']);

    }
    else if(this.loginForm.value.role=='Team Leader')
    {
      this.router.navigate(['leader/dashboard']);

    }
   
  //   this.authenticationservice.login(this.loginForm.value).subscribe({
  //     next:(res:any)=>{
  //       console.log(res);
  //       this.router.navigate(['intern/dashboard']);
  //       // if(res.token){
  //       //   localStorage.clear();
  //       //   localStorage.setItem("userData",JSON.stringify(res));
  //       //   console.log(JSON.parse(localStorage.getItem("userData")||'{}'));
          
  //       //   // this.router.navigate(['/dashboard']);
  //       //   if(res.role==='intern') {
  //       //     this.router.navigate(['intern/dashboard']);
  //       //   }
  //       //   if(res.role==='fte') {
  //       //     this.router.navigate(['fte/dashboard']);
  //       //   }
  //       // }
  //     }
  //   })
  // }
  }

}
