import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';

import { AdminServices } from 'src/app/services/admin-services.service';




@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {

  patient:Patient[] = [];
  // patient2:Patient[] = [];
  searchName?:String;
  Id?:number;

  errorMessage?:String;
  patientId?:number;
  constructor(public adminServices:AdminServices, public router:Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.refreshProducts();
  }

  deletepatient(patientId:number){

    this.adminServices.deletePatient(patientId)
      .subscribe(
        response => {
          console.log(response);
          // this.successMessage = productId +" :   successfully deleted"
          console.log("#######Deleted successfully and navigating and refreshing");
          this.refreshProducts();
          // this.router.navigate([''])
        },
        error => {
          console.log(error);
        });

  }


  refreshProducts(){
    this.adminServices.viewPatients()
    .subscribe((data:any[]) => {
      // PatientLoginComponent.id =this.adminLoginForm.get('patientId').value
      console.log(data);
      this.patient = data
      // this.patientId = this.patient.patientId;
      // this.router.navigate(["adminDashBoard"]);
    },error=>{
      
      this.errorMessage = "You Entered Incorrect Credentials"
      console.log(error)
    },
    )
  }

  addPatient(){

    this.router.navigate(["PatientSignup", this.Id]);

  }

  Back(){
    this.router.navigate(["adminDashBoard", this.Id]);
  }


}
