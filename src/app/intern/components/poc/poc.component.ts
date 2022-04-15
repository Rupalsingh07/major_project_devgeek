import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {

  constructor() { }
  f:any;
  content:any=[
    {
      "name":"Prgya",
      "email":"abc@gmail.com",
      "post":"1234",
      "designation":"Assistant-professor"
     
    }
    ,
    {
      "name":"Abhinav",
      "email":"abc@gmail.com",
      "post":"1234",
      "designation":"Assistant-professor"
    }
    , {
      "name":"Priya",
      "email":"abc@gmail.com",
      "post":"1234",
      "designation":"Assistant-professor"
    }
    , {
      "name":"Pramod",
      "email":"abc@gmail.com",
      "post":"1234",
      "designation":"Assistant-professor"
    }
    , {
      "name":"kamal",
      "email":"abc@gmail.com",
      "post":"1234",
      "designation":"Assistant-professor"
    }
    , {
      "name":"Riya",
      "email":"abc@gmail.com",
      "post":"1234",
      "designation":"Assistant-professor"
    }
  ]

  ngOnInit(): void {
  }
   Search(){
     if(this.f==" "){
       return this.content;
     }
     else{
     this.content=this.content.filter((res:any)=>{
       return res.name.match(this.f);

     })
    }
   }
}
