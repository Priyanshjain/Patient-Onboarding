import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServices } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  addDoctorForm : FormGroup;
  doctorId : Number;
  Id:number;

  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, public adminService : AdminServices ) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.doctorId= this.doctorId;
    this.addDoctorForm = this.formBuilder.group({
      doctorName : ['', [Validators.required,Validators.minLength(5)]],
      department : ['', [Validators.required,Validators.minLength(5)]],
      qualification : ['', [Validators.required,Validators.minLength(5)]],
      expertise : ['', [Validators.required,Validators.minLength(5)]]
    })
  }

  addDoctor(){
    // console.log(this.patientSignUpForm.value)
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();
    this.adminService.addDoctor(this.addDoctorForm.value)
        .subscribe(
          response => {
            console.log(response);
            // this.router.navigate([''])
            this.successMessage = "Doctor Added successfully";
            console.log("#######Doctor added successfully ");
          },
          error => {
            this.errorMessage = "Not able to add a doctor"
            console.log("ERROR in adding doctor : " + error);
          });
  }

  Back(){
    this.router.navigate(["viewDoctors", this.Id]);
  }


}
