import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-admit-form',
  templateUrl: './admit-form.component.html',
  styleUrls: ['./admit-form.component.css']
})
export class AdmitFormComponent implements OnInit {

  admitForm?: FormGroup;
  errorMessage?: string;
  successMessage?: string;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public formBuilder:FormBuilder,public router: Router,public patientService:PatientService,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.admitForm= this.formBuilder.group({
      patientId : [this.Id,Validators.required],
      patientName : ['',Validators.required],
      gender : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      address : ['',Validators.required],
      ward : ['',Validators.required],
      reason : ['',Validators.required],
      admitDateAndTime : ['',Validators.required]
    })
  }

  sendAdmitForm(){
    // console.log(this.admitForm?.value);
    this.patientService.admitForm(this.admitForm?.value)
        .subscribe(
          response => {
            console.log(response);
            // this.router.navigate([''])
            this.successMessage = "Admit Form submite siccessfully wait til to the admin Aproved"
            console.log("#######Admit Form Uploaded successfully ");
          },
          error => {
            this.errorMessage = "Admit Form Cancel"
            console.log("ERROR in save : " + error);
          });
  }

  Back(){
    this.router.navigate(["patientDashBoard",this.Id]);
  }

}
