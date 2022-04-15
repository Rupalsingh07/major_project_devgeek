import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
@Input() id:string='';
@Input() category:string='';
@Input() typ:any
name:any
description:any
end_date:any

  ngOnInit(): void {
  if(this.typ=='allProjects'){
    this.name="Dev Geeks",
    this.description="To manage Innotech projects",
    this.end_date="2022-06-1"
  }
  else if(this.typ=='projectTask1'){
    this.name="Create login page",
    this.description="create login page for dev geeks",
    this.end_date="2022-05-13"
  }
  else if(this.typ=='projectTask2'){
    this.name="profile page",
    this.description="create profile page for dev geeks",
    this.end_date="2022-04-13"
  }

  }
  details(){
    console.log("id",this.id);
    if(this.category=='track'){
          this.router.navigate(['member/track/'+this.id]);
    }
    else{
      this.router.navigate(['member/project/'+this.id]);
    }
  }
}
