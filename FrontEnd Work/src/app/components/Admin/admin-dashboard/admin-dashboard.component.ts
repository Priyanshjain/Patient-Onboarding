import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public router:Router, public activatedRoute:ActivatedRoute) { }

Id?:number;
// Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    console.log(this.Id);
  }

  viewPatient(){
    this.router.navigate(["viewPatients", this.Id]);
  }
  viewDoctors(){
    this.router.navigate(["viewDoctors", this.Id]);
  }
  viewAdmin(){
    this.router.navigate(["viewAdmins", this.Id]);
    
  }
  appointmentDetials(){
    
    this.router.navigate(["viewAppointment", this.Id]);
  }
  viewAdmit(){
    
    this.router.navigate(["viewAdmit", this.Id]);
  }
  editProfile(){
    
    this.router.navigate(["editProfile", this.Id]);
  }
  billGenerate(){
    
    this.router.navigate(["billgenerate", this.Id]);
  }

}
