import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-forget-password',
  templateUrl: './admin-forget-password.component.html',
  styleUrls: ['./admin-forget-password.component.css']
})
export class AdminForgetPasswordComponent implements OnInit {

  
  password:String = "";
  confirm_password:String = "";
  adminForgetPasswordForm: FormGroup;
  Id?:number;
  message:String;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];

  constructor(public activatedRoute:ActivatedRoute,public formBuilder:FormBuilder, public adminService: AdminServices,public router:Router) { }

  ngOnInit(): void {



    this.Id = this.activatedRoute.snapshot.params['Id'];
    if(this.Id == -1){

    this.adminForgetPasswordForm = this.formBuilder.group({
      adminId : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      password : ['',Validators.required],
      confirm_password : ['',Validators.required]
    })
    }
    else{
      this.adminForgetPasswordForm = this.formBuilder.group({
        adminId : [this.Id, Validators.required],
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
    console.log(this.adminForgetPasswordForm.value);
    this.adminService.resetPassword(this.adminForgetPasswordForm.value,this.adminForgetPasswordForm.value.adminId)
        .subscribe(
          response => {
            console.log(response);
            this.message = "Your passowrd saved sucessfully"
            console.log("#######Updated successfully and navigating");
            // this.router.navigate(['patientDashBoard'])
          },
          error => {
            console.log(error);
     });
  }
 Back(){

  if(this.Id == -1){
    this.router.navigate(["adminLogin"])

  }else{

    this.router.navigate(["editProfile", this.Id])
  }
 }
}
