import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(["Patientlogin"]);
  }
  adminLogin(){
    this.router.navigate(["adminLogin"]);
  }
  contactUs(){
    this.router.navigate(["contactUs"]);
  }
  home(){

    this.router.navigate([""]);
    
  }
  covidData(){
    this.router.navigate(["covidDashboard"]);
  }
  medicines(){
    this.router.navigate(["medicineData", -1]);

  }

}
