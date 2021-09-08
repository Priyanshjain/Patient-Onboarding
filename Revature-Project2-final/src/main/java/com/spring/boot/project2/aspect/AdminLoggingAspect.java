package com.spring.boot.project2.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AdminLoggingAspect {
	
	@After("execution(* com.spring.boot.project2.controller.AdminController+.adminSignup(..))")
	public void adminSignup() {
	
		System.out.println("## Admin Sign Up successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.adminLogin(..))")
	public void adminLogin() {
		
		System.out.println("## Admin Login successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.editAdminProfile(..))")
	public void editAdminProfile() {
		
		System.out.println("## Admin edit profile successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.resetPassword(..))")
	public void resetPassword() {
		
		System.out.println("## Admin password reset successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.viewAdmin(..))")
	public void viewAdmin() {
		
		System.out.println("## Admin view successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.viewAdminById(..))")
	public void viewAdminById() {
		
		System.out.println("## Admin view by id successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.viewPatient(..))")
	public void viewPatient() {
		
		System.out.println("## view Patient by Admin successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.viewPatientById(..))")
	public void viewPatientById() {
		
		System.out.println("## view Patient by Id  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.deletePatient(..))")
	public void deletePatient() {
		
		System.out.println("## view Patient by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.addDoctor(..))")
	public void addDoctor() {
		
		System.out.println("## add Doctor by admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.viewDoctorList(..))")
	public void viewDoctorList() {
		
		System.out.println("## view Doctor by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.deleteDoctor(..))")
	public void deleteDoctor() {
		
		System.out.println("## delete Doctor by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.viewAppointments(..))")
	public void viewAppointments() {
		
		System.out.println("## view Appointment by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.getAppointmentById(..))")
	public void getAppointmentById() {
		
		System.out.println("## geting Appointment by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.approveAppointment(..))")
	public void approveAppointment() {
		
		System.out.println("## Approved Appointment by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.admitDetailsById(..))")
	public void admitDetailsById() {
		
		System.out.println("## view admit by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.admitDetails(..))")
	public void admitDetails() {
		
		System.out.println("## view Appontment by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.getAdmitFormById(..))")
	public void getAdmitFormById() {
		
		System.out.println("## view Admit by Admin  successfull");
	}
	@After("execution(* com.spring.boot.project2.controller.AdminController+.addBill(..))")
	public void addBill() {
		
		System.out.println("## add Bill successfull");
	}

}
