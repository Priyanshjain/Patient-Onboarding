import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { AdminServices } from 'src/app/services/admin-services.service';
import { ViewAppointmentHistoryComponent } from '../Patient/view-appointment-history/view-appointment-history.component';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

 
  // patient:Patient[] = [];
  appointment:Appointment[] = [];
  // patient2:Patient[] = [];
  searchName?:String;
  errorMessage?:String;
  patientId?:number;
  status:String = 'Approve' ;
  // disable = false;
  Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];
  constructor(public adminServices:AdminServices, public router:Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.refreshProducts();
  }

  approvedAppointment(appointmentToken:number){

    this.status = "Approved";

    this.adminServices.makeAppointmet(appointmentToken)
      .subscribe(
        response => {
          console.log(response);
          // this.successMessage = productId +" :   successfully deleted"
          console.log("#######Aproved successfully");
          this.refreshProducts();
          // this.router.navigate([''])
        },
        error => {
          console.log(error);
        });

  }

  showByName(){
    
  }

  refreshProducts(){
    this.adminServices.viewAppointment()
    .subscribe((data:any[]) => {
      // PatientLoginComponent.id =this.adminLoginForm.get('patientId').value
      console.log(data);
      console.log("appointment called");

      this.appointment = data
      // this.patientId = this.patient.patientId;
      // this.router.navigate(["adminDashBoard"]);
      
    },error=>{
      
      this.errorMessage = "You Entered Incorrect Credentials"
      console.log(error)
    },
    )
  }

  addPatient(){

    this.router.navigate(["PatientSignup"]);
    
  }
  Back(){
    
    this.router.navigate(["adminDashBoard", this.Id]);
    
  }


}
