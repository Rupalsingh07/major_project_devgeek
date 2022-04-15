import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
export class DateValidators {
  static dateLessThan(dateField1: string, dateField2: string, validatorField: { [key: string]: boolean }): ValidatorFn {
      return (c: AbstractControl): { [key: string]: boolean } | null => {
          const date1 = c.get(dateField1)?.value;
          const date2 = c.get(dateField2)?.value;
          if ((date1 !== null && date2 !== null) && date1 > date2) {
              return validatorField;
          }
          return null;
      };
  }
}
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit {

  constructor(public datepipe: DatePipe) { }
  pipe = new DatePipe('en-US');
  todayWithPipe :any;


  ngOnInit(): void {
  }
  projectForm=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    start_date:new FormControl('',Validators.required),
    end_date:new FormControl('',Validators.required)

  },DateValidators.dateLessThan('start_date', 'end_date', { 'start_date': true }))
  
  postProject(){
    console.log("project created")
  }

}
