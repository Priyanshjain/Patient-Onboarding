import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  password:String = "";
  confirm_password:String = "";
  succesMsg:String = "";
  errorMsg:String = "";
  forgetPasswordForm: FormGroup;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];

  constructor(public activatedRoute:ActivatedRoute,public formBuilder:FormBuilder, public patientService: PatientService,public router:Router) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    if(this.Id == -1){
    this.forgetPasswordForm = this.formBuilder.group({
      patientId : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      password : ['',Validators.required],
      confirm_password : ['',Validators.required]
    })
    }
    else{
      this.forgetPasswordForm = this.formBuilder.group({
        patientId : [this.Id, Validators.required],
        phoneNumber : ['',Validators.required],
        password : ['',Validators.required],
        confirm_password : ['',Validators.required]
      })
  }
}

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;
  }
  saveData(){
    console.log(this.forgetPasswordForm.value);
    this.patientService.resetPassword(this.forgetPasswordForm.value,this.forgetPasswordForm.value.patientId)
        .subscribe(
          response => {
            console.log(response);
            console.log("#######Updated successfully and navigating");
            // this.router.navigate(['patientDashBoard'])
            this.succesMsg = "Data is saves succesfully..."
          },
          error => {
            console.log(error);
            this.errorMsg = "Details are incorrect!!!"
     });
  }
  Back(){
    if(this.Id == -1){
      this.router.navigate(["Patientlogin"])
  
    }else{
  
      this.router.navigate(["editForm", this.Id])
    }
   }
  }

