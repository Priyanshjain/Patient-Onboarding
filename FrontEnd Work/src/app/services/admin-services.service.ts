import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Admin } from '../models/admin';
import { Admit } from '../models/admit.model';
import { Appointment } from '../models/appointment.model';
import { Doctors } from '../models/doctors';
import { ForgetPassword } from '../models/admin-forget-password';
import { Patient } from '../models/patient';
import { Bill } from '../models/bill';
const adminUrl =  "http://localhost:9091/admin";
const makeAppointment= "makeAppointment"
const admitForm= "admitForm"
const appointmentHistory="appointmentHistory"
const admitFormHistory = "admitFormHistory"
const editProfile = "editProfile"
@Injectable({
  providedIn: 'root'
})
export class AdminServices {

  constructor(public httpClient : HttpClient) { }
  res?:String;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

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
      case 200:    
        console.log("200's");
        // return throwError("errormsg");
        // return null;
        break;
      case 401:
        break;
      case 403:
        break;
      case 0:
      case 400:
      case 201:
      case 406:
      case 409:
      case 500:
        break;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  //http://localhost:9090/admin
  adminSignup(admin: Admin): Observable<String>{
    return this.httpClient.post<String>(adminUrl , admin).pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //http://localhost:9090/admin/1/123456
  adminLogin(adminId:number,password:string): Observable<Admin>{
    return this.httpClient.get<Admin>(`${adminUrl}/${adminId}/${password}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }
  //http://localhost:9090/admin
  viewPatients(){
    return this.httpClient.get<Patient[]>(`${adminUrl}/patients`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }
  //http://localhost:9090/admin/id
  deletePatient(patientId:number){
    return this.httpClient.delete(`${adminUrl}/patients/${patientId}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  addDoctor(doctor: Doctors): Observable<Doctors> {
    return this.httpClient.post<Doctors>(`${adminUrl}/addDoctor`, doctor, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  getDoctors(): Observable<Doctors[]> {
    return this.httpClient.get<Doctors[]>(`${adminUrl}/doctors`)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.httpClient.get<Admin>(`${adminUrl}/${adminId}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  deleteDoctor(doctorId: number) : Observable<Doctors> {
    return this.httpClient.delete(`${adminUrl}/doctor/${doctorId}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }
  
  viewAdmin(){
    return this.httpClient.get<Admin[]>(`${adminUrl}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }
  viewAppointment(){
    return this.httpClient.get<Appointment[]>(`${adminUrl}/appointment`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  makeAppointmet(appointmentToken:number): Observable<Appointment>{
    console.log("service called");
    return this.httpClient.put<Appointment>(`${adminUrl}/appointment/${appointmentToken}`, appointmentToken )
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }
  makeAdmit(admitToken:number): Observable<Admit>{
    console.log("service called");
    return this.httpClient.put<Admit>(`${adminUrl}/admit/${admitToken}`, admitToken )
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  viewAdmit(){
    console.log("service called");
    return this.httpClient.get<Admit[]>(`${adminUrl}/admit`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //http://localhost:9091/patient/editProfile/1
  editProfile(admin: Admin,adminId : number): Observable<Admin>{
    return this.httpClient.put<Admin>(`${adminUrl}/editProfile/${adminId}`, admin).pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //http://localhost:9091/patient/resetPassword
  resetPassword(forgetPassword: ForgetPassword,adminId : number): Observable<ForgetPassword>{
    console.log("service called");
    return this.httpClient.put<ForgetPassword>(`${adminUrl}/resetPassword/${adminId}`,forgetPassword).pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  generateBill(bill: Bill): Observable<Bill> {
    return this.httpClient.post<Bill>(`${adminUrl}/addBill`, bill, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

}
