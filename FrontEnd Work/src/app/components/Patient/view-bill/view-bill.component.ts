import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  
  bills : Bill[]
  constructor(public patientService: PatientService, public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.viewBillHistory();
  }

  viewBillHistory(){
    this.patientService.viewBill(this.Id).subscribe((data: any[])=>{
      console.log("###Biils recieved from spring :")
      console.log(data);
      this.bills = data;
    },err => this.errorMessage = err) 
  }
  Back(){

    this.router.navigate(["patientDashBoard", this.Id]);

  }
}
