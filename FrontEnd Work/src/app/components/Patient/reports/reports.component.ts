import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public activatedRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
  }

  Back(){
    this.router.navigate(["patientDashBoard", this.Id])
  }

}
