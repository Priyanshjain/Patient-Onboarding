import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Admit } from '../models/admit.model';
import { Appointment } from '../models/appointment.model';
import { Bill } from '../models/bill';
import { ForgetPassword } from '../models/forget-password';
import { Patient } from '../models/patient';
const patientUrl =  "http://localhost:9091/patient";
const makeAppointment= "makeAppointment"
const admitForm= "admitForm"
const appointmentHistory="appointmentHistory"
const admitFormHistory = "admitFormHistory"
const editProfile = "editProfile"
const resetPassword= "resetPassword"
const viewBill= "viewBill"

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public httpClient : HttpClient) { }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side message
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    switch (error.status) {
      case 200:    console.log("200's");

        break;
      case 401:
        break;
      case 403:
        break;
      case 0:
      case 400:
      case 405:
      case 406:
      case 409:
      case 500:
        break;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }

  //http://localhost:9091/patient
  addPatient(patient: Patient): Observable<Patient>{
    return this.httpClient.post<Patient>(patientUrl,patient).pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

     //http://localhost:9091/patient/makeAppointment
    makeAppointment(appointment : Appointment): Observable<Appointment>{
      return this.httpClient.post<Appointment>(`${patientUrl}/${makeAppointment}`, appointment).pipe(
        retry(0),
        catchError(this.errorHandler)
      );
    }

    //http://localhost:9091/patient/admitForm
    admitForm(admit :Admit): Observable<Admit>{
      return this.httpClient.post<Admit>(`${patientUrl}/${admitForm}`, admit).pipe(
        retry(0),
        catchError(this.errorHandler)
      );
    }    

    //http://localhost:9091/patient/appointmentHistory/40
    viewAppointmentHistory(patientId: number): Observable<Appointment[]> {
      return this.httpClient.get<Appointment[]>(`${patientUrl}/${appointmentHistory}/${patientId}`)
        .pipe(
          retry(1),
          catchError(this.errorHandler)
        )
    }

    //http://localhost:9091/patient/admitFormHistory/11
    viewAdmitFormHistory(patientId: number): Observable<Admit[]> {
      return this.httpClient.get<Admit[]>(`${patientUrl}/${admitFormHistory}/${patientId}`)
        .pipe(
          retry(1),
          catchError(this.errorHandler)
        )
    }

    //localhost:9091/patient/viewBill/50
    viewBill(patientId: number): Observable<Bill[]> {
      return this.httpClient.get<Bill[]>(`${patientUrl}/${viewBill}/${patientId}`)
        .pipe(
          retry(1),
          catchError(this.errorHandler)
        )
    }

    //http://localhost:9091/patient/1
    showProfile(patientId: number): Observable<Patient> {
      return this.httpClient.get<Patient>(`${patientUrl}/${patientId}`)
        .pipe(
          retry(1),
          catchError(this.errorHandler)
        )
    }

     //http://localhost:9091/patient/editProfile/1
     editProfile(patient: Patient,patientId : number): Observable<Patient>{
      return this.httpClient.put<Patient>(`${patientUrl}/${editProfile}/${patientId}`,patient).pipe(
          retry(0),
          catchError(this.errorHandler)
        );
    }

    //http://localhost:9091/patient/1/123456
    patientLogin(patientId:number,password:string): Observable<Patient>{
      return this.httpClient.get<Patient>(`${patientUrl}/${patientId}/${password}`).pipe(
        retry(0),
        catchError(this.errorHandler)
      )
    }

    //http://localhost:9091/patient/resetPassword
    resetPassword(forgetPassword: ForgetPassword,patientId : number): Observable<ForgetPassword>{
      console.log("service called");
      return this.httpClient.put<ForgetPassword>(`${patientUrl}/${resetPassword}/${patientId}`,forgetPassword).pipe(
        retry(0),
        catchError(this.errorHandler)
      );
    }
}
