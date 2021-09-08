import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  errorMessage?: string;
  successMessage?: string;
  
  patient: Patient;
  constructor(public patientService: PatientService, public router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  
  getProfile(){
    this.patientService.showProfile(38).subscribe((data) => {
      console.log("###Data recieved from spring :")
      console.log(data);
      this.patient = data;
    }, err => this.errorMessage = err)
  }

}
