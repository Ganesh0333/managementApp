import { Component } from '@angular/core';
import { CreateStudentService } from '../create-student.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {

  public studentForm:FormGroup= new FormGroup({
    name:new FormControl(),
    gender:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    batch:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      mandal:new FormControl(),
      district:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    company:new FormGroup({
      name:new FormControl(),
      location:new FormControl(),
      package:new FormControl(),
      offerdate:new FormControl()
    }),

    education:new FormArray([]),
    type:new FormControl(),
    
  })
  constructor(private _createStudentService:CreateStudentService){
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if (data=='direct'){
          this.studentForm.addControl('sourceFrom',new FormControl());
          this.studentForm.addControl('referal',new FormControl());
        }
        else{
          this.studentForm.addControl('referal',new FormControl());
          this.studentForm.removeControl('sourceFrom');
        }
      }
    )
  }

  

  get educationFormArray(){
    return this.studentForm.get("education") as FormArray
  }

  add(){
    this.educationFormArray.push(
      new FormGroup({
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      })
    )
  }

  submit(){
    console.log(this.studentForm.value);
    this._createStudentService.getStudentDetails(this.studentForm.value).subscribe(
    (data:any)=>{
    alert("data added sucessfully");
    },
    (err:any)=>{
    alert("fail to add data");
    })
  }
  delete(i:number){
    this.educationFormArray.removeAt(i);
  }
}
