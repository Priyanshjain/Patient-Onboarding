import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctors } from 'src/app/models/doctors';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  doctors:Doctors[];
  searchId?:Number;
  Id:number;

  constructor(public adminService:AdminServices , public router:Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.refreshDoctors();
  }

  deleteDoctor(doctorId:number){
    this.adminService.deleteDoctor(doctorId)
      .subscribe(
        response => {
          console.log(response);
          this.successMessage = doctorId +" :   successfully deleted";
          console.log("#######Deleted successfully ");
          this.refreshDoctors();
        },
        error => {
          console.log(error);
        });
  }

  refreshDoctors(){
    this.adminService.getDoctors().subscribe((data: any[])=>{
      console.log("###Products recieved from spring :")
      console.log(data);
      this.doctors = data;
    },err => this.errorMessage = err) 
  }

  // getDoctorById(doctorId:number)
  // {
  //   this.adminService.getDoctorById(doctorId).subscribe((data: any)=>{
  //     console.log("###Products recieved from spring :")
  //     console.log(data);
  //     this.doctors = data;
  //   },err => this.errorMessage = err) 
  // }

  addDoctor(){
    this.router.navigate(["addDoctorForm", this.Id]);
  }
  
  appointment(){
    
    this.router.navigate(["Patientlogin"]);
  }
  Back(){
    
    this.router.navigate(["adminDashBoard", this.Id]);
  }

}
