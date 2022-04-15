import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

 
  pipe = new DatePipe('en-US');
  
  projectId:any;
  assigneeList : any;

  taskForm=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    priority:new FormControl('',Validators.required),
    type:new FormControl('',Validators.required),
    deadline:new FormControl('',Validators.required),
    assignee:new FormControl('',Validators.required)
  })

  constructor(private router:Router,public datepipe: DatePipe, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("project id",params['id']);
      this.projectId=params['id'];
   })
    // this.refresh$.pipe(switchMap(_=>this.authService.getDiscussion(this.trackId)))
    // .subscribe(
    //   data=>{
    //    this.con=data;
       
    //    console.log("all post",this.con);
    //    console.log(this.con[0].comments[0].commment)
    //   }
    //  )
  //  }
  // this.authService.getAllInternsOfProject(this.projectId).subscribe((res:any) => {
  //   this.assigneeList = res;
  // })
  

  }
  
  data:any

  postTask(){
  
    
      //  this.fteAuthServices.getAllFteProjects().subscribe({
  
      //   next:(res:any)=>{
          
      //    console.log(res);
      //   },
      //   error:(err:any)=>{
      //     console.log(err)
      //   }
        //  })
console.log("task created",this.taskForm.value)

   // this.router.navigate(['FTE/project-details/'+this.projectId]);

  }

}
