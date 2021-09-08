import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctors } from 'src/app/models/doctors';
import { AdminServices } from 'src/app/services/admin-services.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  
  appointmentForm?: FormGroup;
  errorMessage?: string;
  successMessage?: string;
  Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['id'];

  doctors:Doctors[]

  constructor(public formBuilder:FormBuilder,public adminService:AdminServices,public router: Router,public patientService:PatientService,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.appointmentForm= this.formBuilder.group({
      patientId : [this.Id,Validators.required],
      patientName : ['',Validators.required],
      gender : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      address : ['',Validators.required],
      disease : ['',Validators.required],
      doctor : ['',Validators.required],
      appointmentDateAndTime : ['',Validators.required],
      message : ['']
    })
    this.getDoctors();
  }

  sendAppointment(){
    // console.log(this.appointmentForm?.value);
    this.patientService.makeAppointment(this.appointmentForm?.value)
        .subscribe(
          response => {
            console.log(response);
            this.successMessage = "Your appointment is booked but in rejection wait till the Admin Approved"
            console.log("#######Appointment Booked successfully ");
          },
          error => {
            this.errorMessage = "Appointment Booking Cancel"
            console.log("ERROR in save : " + error);
          });
  }
  Back(){
    this.router.navigate(["patientDashBoard", this.Id])
  }


  getDoctors(){

    this.adminService.getDoctors().subscribe((data: any)=>{
      console.log("###Doctors recieved from spring :")
      console.log(data);
      this.doctors = data;
      console.log(this.doctors[0].doctorName);
    },err => this.errorMessage = err) 
  }

}
