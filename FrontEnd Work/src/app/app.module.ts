import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmitFormComponent } from './components/admit-form/admit-form.component';
import { HomeComponent } from './components/home/home.component';


import { PatientSignupComponent } from './components/Patient/patient-signup/patient-signup.component';
import { PatientLoginComponent } from './components/Patient/patient-login/patient-login.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/Admin/admin-signup/admin-signup.component';
import { BillComponent } from './components/Bill-Component/bill/bill.component';
import { PatientDashboardComponent } from './components/Patient/patient-dashboard/patient-dashboard.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';

import { ViewBillComponent } from './components/Patient/view-bill/view-bill.component';
import { ViewAppointmentHistoryComponent } from './components/Patient/view-appointment-history/view-appointment-history.component';
import { ViewAdmitFormHistoryComponent } from './components/Patient/view-admit-form-history/view-admit-form-history.component';
import { ViewProfileComponent } from './components/Patient/view-profile/view-profile.component';



import { EditPatientComponent } from './components/Patient/edit-patient/edit-patient.component';
import { DoctorsComponent } from './components/Admin/doctors/doctors.component';
import { EditAdminComponent } from './components/Admin/edit-admin/edit-admin.component';
import { ViewAdminsComponent } from './components/view-admins/view-admins.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';

import { FooterComponent } from './components/footer/footer.component';

import { AddDoctorComponent } from './components/Admin/add-doctor/add-doctor.component';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';
import { ViewAdmitComponent } from './components/view-admit/view-admit.component';
import { AdminForgetPasswordComponent } from './components/Admin/admin-forget-password/admin-forget-password.component';

import { ForgetPasswordComponent } from './components/Patient/forget-password/forget-password.component';
import { ReportsComponent } from './components/Patient/reports/reports.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoviddataComponent } from './components/coviddata/coviddata.component';
import { MatCardModule } from '@angular/material/card';  
import { MatSelectModule } from '@angular/material/select';
import { DisplayDirective } from './directives/display.directive';

import { NavbarComponent } from './components/navbar/navbar.component';

import { MedicinedataComponent } from './components/medicinedata/medicinedata.component';





@NgModule({
  declarations: [
    AppComponent,

    MakeAppointmentComponent,
    AdmitFormComponent,
    HomeComponent,
    AdminSignupComponent,
    PatientSignupComponent,
    PatientLoginComponent,
    AdminLoginComponent,

    BillComponent,
    PatientDashboardComponent,
    AdminDashboardComponent,
    ViewBillComponent,
    ViewAppointmentHistoryComponent,
    ViewAdmitFormHistoryComponent,
    ViewProfileComponent,
    EditPatientComponent,
    DoctorsComponent,
    EditAdminComponent,
    ViewAdminsComponent,
    ViewPatientsComponent,
    NavbarComponent,
    FooterComponent,
    MedicinedataComponent,
    AddDoctorComponent,
    ViewAppointmentComponent,
    ViewAdmitComponent,
    AdminForgetPasswordComponent,

    ForgetPasswordComponent,
    ReportsComponent,
    ContactUsComponent,
    CoviddataComponent,
    DisplayDirective,
    MedicinedataComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,  
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
