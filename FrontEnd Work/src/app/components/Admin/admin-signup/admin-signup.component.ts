import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  successMessage?: string;
  errorMessage?: string; 
  adminSignUpForm : FormGroup;
  password:String = "";
  confirm_password:String = "";
  Id?:number;
  displayButton:String = "appDisplay";
  notdisplay:String = "";
  

  constructor(public activatedRoute: ActivatedRoute,public formBuilder:FormBuilder, public adminService:AdminServices, public router:Router) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    this.Id = this.activatedRoute.snapshot.params['Id'];
    //Model Driven FormBuilder
    this.adminSignUpForm = this.formBuilder.group({
      adminName : ['',[Validators.required, Validators.minLength(5)]],
      password : ['',[Validators.required,Validators.minLength(5)]],
      confirm_password : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      gender : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      age : ['', Validators.required],
      address : ['', Validators.required]

    })

    if(this.Id == -1){
      // document.getElementById("login").style.display = "";
    }
    else{
      document.getElementById("login").style.display = "none";

    }

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveAdmin(){
    console.log(this.adminSignUpForm.value)
    
    this.adminService.adminSignup(this.adminSignUpForm.value).subscribe(
    (response:String) => {
      console.log(response);
      // this.router.navigate(['adminLogin']);
      this.successMessage = "Your Id generated please go to login and use this id:- "+response+" for login";
      console.log("#######Patient Sign up successfully ");
    },
    error => {
      this.errorMessage = "Not able sign up"
      console.log("ERROR in save : " + error);
    });
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;
  }
login(){
  this.router.navigate(['adminLogin']);
}
dashboard(){
  console.log(this.Id);

  if(this.Id == -1){
    this.router.navigate([""]);
  }
  else{
    this.router.navigate(["viewAdmins", this.Id]);

  }
  
}


}
