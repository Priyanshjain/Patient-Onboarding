import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  
  errMessage : string = "";
  message:String;
  adminEditForm : FormGroup;
  admin?:Admin;
  adminId?:number;
  
  

  details = false;
  lable = "Edit";
  readonly = true;
  Id?:number;
  SuccessMsg:String;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];


  constructor(public activatedRoute: ActivatedRoute, public adminServices: AdminServices,public formBuilder:FormBuilder,public router:Router) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.getProfile();

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.adminEditForm.value)
    // this.employeeDetailService.createEmployee(this.adminSignUpForm.value).subscribe();
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }

  show(){
    this.details = true;  
    this.readonly = false;
  }
  readOnly(){
    this.readonly = true;
  }
  

  getProfile(){
    this.admin = new Admin();
    this.adminId = this.activatedRoute.snapshot.params['adminId'];
    this.adminServices.getAdminById(this.Id)
    .subscribe(data => {
      this.admin = data
      console.log(this.admin, "ggggggggggggggggg"),
          this.adminEditForm = this.formBuilder.group({
            adminName : [this.admin.adminName,[Validators.required, Validators.minLength(5)]],
            password : [this.admin.password,[Validators.required,Validators.minLength(5)]],
            confirm_password : [this.admin.confirm_password,Validators.required],
            email : [this.admin.email,[Validators.required,Validators.email]],
            adminId : [this.admin.adminId,[Validators.required]],
            gender : [this.admin.gender, Validators.required],
            phone : [this.admin.phoneNumber, Validators.required],
            address : [this.admin.address, Validators.required]
          })
    },
      error => console.log(error)
    )
  }

  updateAdmin(){
    console.log(this.adminEditForm.value)
    this.adminServices.editProfile(this.adminEditForm.value,this.Id)
        .subscribe(
          response => {
            console.log(response);
            console.log("#######Updated successfully and navigating");
            this.SuccessMsg = "Details Update Successfully.....";
            // this.router.navigate(['patientDashBoard'])
          },
          error => {
            this.errMessage = "Data not saved"
            console.log(error);
          });
  }

forgetPassword(){
  this.router.navigate(["adminForgetPassword", this.Id]);
}
Back(){
  this.router.navigate(["adminDashBoard", this.Id]);
}

}
