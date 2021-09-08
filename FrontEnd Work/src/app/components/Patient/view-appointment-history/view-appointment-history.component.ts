import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-appointment-history',
  templateUrl: './view-appointment-history.component.html',
  styleUrls: ['./view-appointment-history.component.css']
})
export class ViewAppointmentHistoryComponent implements OnInit {
  errorMessage?: string;
  successMessage?: string;
  appointmentToken? : number;

  appointments:Appointment[]
  Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['id'];
// this.router.navigate(["patientDashBoard", this.Id]);
  constructor(public patientService: PatientService, public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.getAppointmentHistory();
  }

  getAppointmentHistory(){
    this.patientService.viewAppointmentHistory(this.Id).subscribe((data: any[]) => {
      console.log("###Appointment recieved from spring :")
      console.log(data);
      this.appointments = data;
    }, err => this.errorMessage = err)
  }
  Back(){
    this.router.navigate(["patientDashBoard", this.Id]);

  }
}
