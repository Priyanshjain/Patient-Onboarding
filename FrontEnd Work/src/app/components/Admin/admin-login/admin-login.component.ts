import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm : FormGroup;
  errorMessage?:String;
  adminId:number;

  constructor(public formBuilder:FormBuilder, public router:Router, public adminServices:AdminServices) { 
  }

  ngOnInit(): void {
    this.adminLoginForm = this.formBuilder.group({
    adminId : ['', Validators.required],
    password : ['', Validators.required]
    })
  }
  adminLogin(){
    
    console.log(this.adminLoginForm.value);
    this.adminServices.adminLogin(this.adminLoginForm.get('adminId').value,this.adminLoginForm.get('password').value)
    .subscribe((data) => {
      console.log("Login Successfully----->")
      console.log(data)

      this.router.navigate(["adminDashBoard", this.adminLoginForm.get('adminId').value]);
    },error=>{
      
      this.errorMessage = "You Entered Incorrect Credentials"
      console.log(error);
    },
    )
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();
  }

  login(){
    // this.router.navigate(["adminDashBoard"])
  }
  sign_up(){
    this.router.navigate(["adminSignup", -1])
    
  }
  back(){
    
    this.router.navigate([""])
  }

  forgetPassword(){
    this.router.navigate(["adminForgetPassword", -1]);
  }
}
