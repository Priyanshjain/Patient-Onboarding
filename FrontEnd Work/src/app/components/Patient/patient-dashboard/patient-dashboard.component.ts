import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  Id?:number;
  // Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['id'];
// this.router.navigate(["patientDashBoard", this.Id]);
  constructor(public router:Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
  }

  appointmentForm(){
    this.router.navigate(["appointmentForm", this.Id])
  }
  admitForm(){
    this.router.navigate(["admitForm", this.Id])
  }
  editForm(){
    this.router.navigate(["editForm", this.Id])
  }

  patientBill(){
    this.router.navigate(["patientBill", this.Id])
 
  }
  admit(){
    this.router.navigate(["viewAdmittHistory", this.Id])
 
  }
  appointment(){
    this.router.navigate(["viewAppointmentHistory", this.Id])
 
  }
  reports(){
    this.router.navigate(["reports", this.Id])
    
  }
  medicines(){
    this.router.navigate(["medicineData", this.Id])
  }


}
