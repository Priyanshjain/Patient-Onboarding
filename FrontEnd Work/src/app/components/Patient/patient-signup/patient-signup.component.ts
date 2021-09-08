import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  patientSignUpForm : FormGroup;
  password:String = "";
  confirm_password:String = "";
  Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];

  constructor(public formBuilder:FormBuilder,public router: Router,public patientService:PatientService,public activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    this.Id = this.activatedRoute.snapshot.params['Id'];
    //Model Driven FormBuilder
    this.patientSignUpForm = this.formBuilder.group({
      patientName : ['',[Validators.required, Validators.minLength(5)]],     
      password : ['',[Validators.required,Validators.minLength(5)]],
      confirm_password : ['',[Validators.required,Validators.minLength(5)]],
      email : ['',[Validators.required,Validators.email]],
      gender : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      patientAge : ['', Validators.required],
      address : ['', Validators.required],
      idProof : ['', Validators.required]
    })

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  savePatient(){
    // console.log(this.patientSignUpForm.value)
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();
    this.patientService.addPatient(this.patientSignUpForm.value)
        .subscribe(
          response => {
            console.log(response);
            // this.router.navigate([''])
            this.successMessage = "Your Id generated please go to login and use this id:- "+response+" for login";
            console.log("#######Patient Sign up successfully ");
          },
          error => {
            this.errorMessage = "Not able sign up"
            console.log("ERROR in save : " + error);
          });
  }

  // editProfile(patientId: number){
  //   this.patientService.editProfile(this.patientSignUpForm?.value,patientId)
  //       .subscribe(
  //         response => {
  //           console.log(response);
  //           console.log("#######Updated successfully and navigating");
  //           this.router.navigate([''])
  //         },
  //         error => {
  //           console.log(error);
  //         });
  // }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }
  login(){
    this.router.navigate(['Patientlogin']);
  }
  dashboard(){
    console.log(this.Id);
  
    if(this.Id == -1){
      this.router.navigate([""]);
    }
    else{
      this.router.navigate(["viewPatients", this.Id]);
  
    }
  }
}

