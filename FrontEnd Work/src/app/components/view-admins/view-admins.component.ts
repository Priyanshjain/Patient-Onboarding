import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.component.html',
  styleUrls: ['./view-admins.component.css']
})
export class ViewAdminsComponent implements OnInit {

  
  admin:Admin[] = [];
  admin1:Admin;
  // patient2:Patient[] = [];
  searchName?:String;
  errorMessage?:String;
  adminId:number;
  viewByIdForm : FormGroup;
  Id?:number;
// 
// 
  constructor(public activatedRoute:ActivatedRoute,public adminServices:AdminServices, public router:Router, public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
      this.refreshAdmin();    
  }

  

  refreshAdmin(){
    this.adminServices.viewAdmin()
    .subscribe((data:any[]) => {
      console.log(data);
      this.admin = data;
    },error=>{
      
      this.errorMessage = "You Entered Incorrect Credentials"
      console.log(error)
    },
    )
  }

  addAdmin(){

    this.router.navigate(["adminSignup", this.Id]);
    
  }
  Back(){
    
    this.router.navigate(["adminDashBoard", this.Id]);
  }

}
