import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admit } from 'src/app/models/admit.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-admit-form-history',
  templateUrl: './view-admit-form-history.component.html',
  styleUrls: ['./view-admit-form-history.component.css']
})
export class ViewAdmitFormHistoryComponent implements OnInit {
  errorMessage?: string;
  successMessage?: string;

  admits:Admit[]
  Id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['id'];
// this.router.navigate(["patientDashBoard", this.Id]);
  constructor(public patientService: PatientService, public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.getAdmitFormHistory();
  }

  getAdmitFormHistory(){
    this.patientService.viewAdmitFormHistory(12).subscribe((data: any[]) => {
      console.log("###Admit form recieved from spring :")
      console.log(data);
      this.admits = data;
    }, err => this.errorMessage = err)
  }

  Back(){
    this.router.navigate(["patientDashBoard", this.Id]);
  }

}
