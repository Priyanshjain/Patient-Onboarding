import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-medicinedata',
  templateUrl: './medicinedata.component.html',
  styleUrls: ['./medicinedata.component.css']
})
export class MedicinedataComponent implements OnInit {

  id?:number;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public activatedRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  Back(){
    if(this.id == -1){
      this.router.navigate([""])
      
    }
    else{
      this.router.navigate(["patientDashBoard", this.id])

    }
  }

}
