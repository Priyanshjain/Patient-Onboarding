import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/Admin/admin-signup/admin-signup.component';
import { AdmitFormComponent } from './components/admit-form/admit-form.component';
import { DoctorsComponent } from './components/Admin/doctors/doctors.component';
import { EditAdminComponent } from './components/Admin/edit-admin/edit-admin.component';
import { EditPatientComponent } from './components/Patient/edit-patient/edit-patient.component';
import { HomeComponent } from './components/home/home.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { PatientDashboardComponent } from './components/Patient/patient-dashboard/patient-dashboard.component';
import { PatientLoginComponent } from './components/Patient/patient-login/patient-login.component';
import { PatientSignupComponent } from './components/Patient/patient-signup/patient-signup.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { FooterComponent } from './components/footer/footer.component';


import { AddDoctorComponent } from './components/Admin/add-doctor/add-doctor.component';
import { ViewAdminsComponent } from './components/view-admins/view-admins.component';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';
import { ViewAdmitComponent } from './components/view-admit/view-admit.component';
import { AdminForgetPasswordComponent } from './components/Admin/admin-forget-password/admin-forget-password.component';
import { ForgetPasswordComponent } from './components/Patient/forget-password/forget-password.component';
import { ViewBillComponent } from './components/Patient/view-bill/view-bill.component';
import { ViewAppointmentHistoryComponent } from './components/Patient/view-appointment-history/view-appointment-history.component';
import { ViewAdmitFormHistoryComponent } from './components/Patient/view-admit-form-history/view-admit-form-history.component';
import { ReportsComponent } from './components/Patient/reports/reports.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BillComponent } from './components/Bill-Component/bill/bill.component';
import { CoviddataComponent } from './components/coviddata/coviddata.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MedicinedataComponent } from './components/medicinedata/medicinedata.component';


const routes: Routes = [
  { path:"",component: HomeComponent },
  { path:"Patientlogin",component: PatientLoginComponent },
  // { path:"patientDashBoard",component: PatientDashboardComponent },
  { path:"patientDashBoard/:id",component: PatientDashboardComponent },
  // { path:"PatientSignup",component: PatientSignupComponent },
  { path:"PatientSignup/:Id",component: PatientSignupComponent },
  // { path:"appointmentForm",component: MakeAppointmentComponent },
  { path:"appointmentForm/:id",component: MakeAppointmentComponent },
  // { path:"admitForm",component: AdmitFormComponent },
  { path:"admitForm/:id",component: AdmitFormComponent },
  // { path:"editForm",component: EditPatientComponent },
  { path:"editForm/:id",component: EditPatientComponent },
  // { path:"patientBill",component: ViewBillComponent },
  { path:"patientBill/:id",component: ViewBillComponent },
  { path:"adminLogin",component: AdminLoginComponent },
  // { path:"adminDashBoard",component: AdminDashboardComponent },
  { path:"adminDashBoard/:Id",component: AdminDashboardComponent },
  // { path:"adminSignup",component: AdminSignupComponent },
  { path:"adminSignup/:Id",component: AdminSignupComponent },
  // { path:"viewPatients",component: ViewPatientsComponent },
  { path:"viewPatients/:Id",component: ViewPatientsComponent },
  // { path:"viewPatients",component: ViewPatientsComponent },
  { path:"viewDoctors/:Id",component: DoctorsComponent },
  { path:"navbar",component: NavbarComponent },
  { path:"footer",component: FooterComponent },

  // { path:"addDoctorForm",component: AddDoctorComponent },
  { path:"addDoctorForm/:Id",component: AddDoctorComponent },
  // { path:"viewAdmins",component: ViewAdminsComponent },
  { path:"viewAdmins/:Id",component: ViewAdminsComponent },
  // { path:"viewAppointment",component: ViewAppointmentComponent },
  { path:"viewAppointment/:Id",component: ViewAppointmentComponent },
  // { path:"viewAdmit",component: ViewAdmitComponent },
  { path:"viewAdmit/:Id",component: ViewAdmitComponent },
  // { path:"editProfile",component: EditAdminComponent },
  { path:"editProfile/:Id",component: EditAdminComponent },
  // { path:"adminForgetPassword",component: AdminForgetPasswordComponent },
  { path:"adminForgetPassword/:Id",component: AdminForgetPasswordComponent },
  
  // { path:"forgetPassword",component: ForgetPasswordComponent },
  { path:"forgetPassword/:id",component: ForgetPasswordComponent },
  // { path:"viewAppointmentHistory",component: ViewAppointmentHistoryComponent },
  { path:"viewAppointmentHistory/:id",component: ViewAppointmentHistoryComponent },
  // { path:"viewAdmittHistory",component: ViewAdmitFormHistoryComponent },
  { path:"viewAdmittHistory/:id",component: ViewAdmitFormHistoryComponent },
  // { path:"reports",component: ReportsComponent },
  { path:"reports/:id",component: ReportsComponent },
  { path:"contactUs",component: ContactUsComponent },
  // { path:"billgenerate",component: BillComponent },
  { path:"billgenerate/:Id",component: BillComponent },
  { path:"covidDashboard",component: CoviddataComponent },
  { path:"medicineData/:id",component: MedicinedataComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
