import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  
  billGenerateForm : FormGroup;
  total?:number = 0;
  successMessage?: string;
  errorMessage?: string;
  Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];

  constructor(public activatedRoute: ActivatedRoute,public formBuilder:FormBuilder, public adminService:AdminServices, public router:Router) { }  
  ngOnInit() { 
    this.refreshPage();

  } 
  
  refreshPage(){
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.billGenerateForm = this.formBuilder.group({
      patientId : ['',Validators.required],
      medicinePrice : ['',Validators.required],
      quantity : ['',Validators.required],
      surgeryCost : ['',Validators.required],
      appointmentCost : ['', Validators.required],
      doctorFees : ['', Validators.required],
      hospitalCharges : ['', Validators.required],
      otherCharges : ['', Validators.required],

    }) 
  }

  generateBill(){
    this.adminService.generateBill(this.billGenerateForm.value).subscribe(
      (response) => {
        console.log(this.billGenerateForm.value)
        console.log(response);
        // this.router.navigate(['adminLogin']);
        this.successMessage = "Bill Generated successfully";
        console.log("#######Patient Sign up successfully ");
      },
      error => {
        this.errorMessage = "bill not generated"
        console.log("ERROR in save : " + error);
      });

  }
  Back(){
    this.router.navigate(["adminDashBoard", this.Id])

  }
   
  }  