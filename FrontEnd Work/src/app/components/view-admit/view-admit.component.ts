import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admit } from 'src/app/models/admit.model';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-view-admit',
  templateUrl: './view-admit.component.html',
  styleUrls: ['./view-admit.component.css']
})
export class ViewAdmitComponent implements OnInit {

  
  // patient:Patient[] = [];
  admit:Admit[] = [];
  // patient2:Patient[] = [];
  searchName?:String;
  errorMessage?:String;
  patientId?:number;
  status:String = 'Approve' ;
  // disable = false;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['Id'];

  constructor(public adminServices:AdminServices, public router:Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.refreshProducts();
  }

  approvedAdmit(admitToken:number){

    this.status = "Approved";

    this.adminServices.makeAdmit(admitToken)
      .subscribe(
        response => {
          console.log(response);
          // this.successMessage = productId +" :   successfully deleted"
          console.log("#######Aproved successfully");
          this.refreshProducts();
          // this.router.navigate([''])
        },
        error => {
          console.log(error);
        });

  }


  refreshProducts(){
    this.adminServices.viewAdmit()
    .subscribe((data:any[]) => {
      // PatientLoginComponent.id =this.adminLoginForm.get('patientId').value
      console.log(data);
      console.log("admit called");

      this.admit = data
      // this.patientId = this.patient.patientId;
      // this.router.navigate(["adminDashBoard"]);
      
    },error=>{
      
      this.errorMessage = "You Entered Incorrect Credentials"
      console.log(error)
    },
    )
  }

  Back(){
    
    this.router.navigate(["adminDashBoard", this.Id]);


  }

}
