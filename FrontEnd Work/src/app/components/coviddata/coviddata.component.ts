import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountryData, SummaryData } from 'src/app/models/coviddata';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coviddata',
  templateUrl: './coviddata.component.html',
  styleUrls: ['./coviddata.component.css'],
  providers: [DatePipe]
})
export class CoviddataComponent implements OnInit {

  title = 'covid19-tracker';  
  summaryData: SummaryData;  
  indiaData: CountryData;  
  selectedCountryData: CountryData;  
  highlyConfirmedData: Array<CountryData>;  
  highlyDeathData: Array<CountryData>;  
  highlyRecoveredData: Array<CountryData>;  
  currentDate: string;  
  
  constructor(private service: DataService, private datePipe: DatePipe) { }  
  
  ngOnInit() {  
    let date = new Date();  
    this.currentDate = this.datePipe.transform(date,'dd-MMM-yyyy');  
    this.getAllData();  
  }  
  
  getAllData() {  
    this.service.getData().subscribe(  
      response => {  
        this.summaryData = response;  
        this.getIndiaData();  
        this.getSortedData();  
      }  
    )  
  }  
  
  getIndiaData() {  
    this.indiaData = this.summaryData.Countries.find(x => x.Slug == "india");  
  }  
  
  getSortedData() {  
    let data = JSON.parse(JSON.stringify(this.summaryData.Countries));  
    this.highlyConfirmedData = data.sort((a: { TotalConfirmed: number; }, b: { TotalConfirmed: number; }) => b.TotalConfirmed - a.TotalConfirmed).slice(0, 10);  
    this.highlyDeathData = data.sort((a: { TotalDeaths: number; }, b: { TotalDeaths: number; }) => b.TotalDeaths - a.TotalDeaths).slice(0, 10);  
    this.highlyRecoveredData = data.sort((a: { TotalRecovered: number; }, b: { TotalRecovered: number; }) => b.TotalRecovered - a.TotalRecovered).slice(0, 10);  
  }  

}
