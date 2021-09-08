import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  errorMessage?: string;
  patientLoginForm : FormGroup;

  constructor(public formBuilder:FormBuilder,public patientService:PatientService,public router:Router) { }


  ngOnInit(): void {
    this.patientLoginForm = this.formBuilder.group({
      patientId : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  patientLogin(){
    console.log(this.patientLoginForm.value)
    this.patientService.patientLogin(this.patientLoginForm.get('patientId').value,this.patientLoginForm.get('password').value)
    .subscribe(() => {
      console.log("Login Successfully")
      this.router.navigate(["patientDashBoard", this.patientLoginForm.get('patientId').value]);
    },error=>{
      
      this.errorMessage = "You Entered Incorrect Credentials"
      console.log(error)
    },
    )
  }   



  saveEmployee(){
    console.log(this.patientLoginForm.value)
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();

  }

  login(){
    // this.router.navigate(["patientDashBoard"])
  }
  
  forgetPassword(){
    this.router.navigate(["forgetPassword", -1])
  }

  sign_up(){
    this.router.navigate(["PatientSignup", -1])
    
  }
  back(){
    
    this.router.navigate([""])
  }


}
