import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  errorMessage : string = "";
  successMsg : string = "";
  patientEditForm : FormGroup;


  details = false;
  lable = "Edit";
  readonly = true;

  patientId:number;
  patient: Patient;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public activatedRoute: ActivatedRoute, public patientService: PatientService,public formBuilder:FormBuilder,public router:Router) { 
  }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.getProfile();
  }

  show(){
    this.details = true;  
    this.readonly = false;
  }
  readOnly(){
    this.readonly = true;
  }

    
  getProfile(){
    this.patient = new Patient();
    this.patientId = this.activatedRoute.snapshot.params['patientId'];
    this.patientService.showProfile(this.Id)
    .subscribe(data => {
      console.log(data),
        this.patient = data
        this.patientEditForm = this.formBuilder.group({
          patientId : [this.patient.patientId, Validators.required],
          patientName : [this.patient.patientName,[Validators.required, Validators.minLength(5)]],
          email : [this.patient.email,[Validators.required,Validators.email]],
          gender : [this.patient.gender, Validators.required],
          phoneNumber : [this.patient.phoneNumber, Validators.required],
          patientAge : [this.patient.patientAge, Validators.required],
          address : [this.patient.address, Validators.required],
          idProof : [this.patient.idProof, Validators.required]
        })
    },
      error => console.log(error)
    )
  }

  updatePatient(){
    console.log(this.patientEditForm.value)
    this.patientService.editProfile(this.patientEditForm.value,this.Id)
        .subscribe(
          response => {
            console.log(response);
            this.successMsg = "Data is succesfuly updated"
            console.log("#######Updated successfully and navigating");
            // this.router.navigate(['patientDashBoard'])
          },
          error => {
            this.errorMessage = "Data is succesfuly updated"

            console.log(error);
          });
  }

forgetPassword(){
  this.router.navigate(["forgetPassword", this.Id]);
}
Back(){
  this.router.navigate(["patientDashBoard", this.Id]);
}

}
