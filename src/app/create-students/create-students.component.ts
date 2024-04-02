import { Component } from '@angular/core';
import { CreateStudentService } from '../create-student.service';
import { EmailValidator, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {

  public studentForm:FormGroup= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(5)]),
    gender:new FormControl(null,[Validators.required]),
    mobile:new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    batch:new FormControl(),
    address:new FormGroup({
      city:new FormControl(null,[Validators.required]),
      mandal:new FormControl(null,[Validators.required]),
      district:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      pincode:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    company:new FormGroup({
      name:new FormControl(null,[Validators.required]),
      location:new FormControl(null,[Validators.required]),
      package:new FormControl(null,[Validators.required]),
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
        qualification:new FormControl(null,[Validators.required]),
        year:new FormControl(null,[Validators.required]),
        percentage:new FormControl(null,[Validators.required,Validators.min(30),Validators.max(100)])
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
