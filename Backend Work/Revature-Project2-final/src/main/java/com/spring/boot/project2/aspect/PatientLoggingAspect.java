package com.spring.boot.project2.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class PatientLoggingAspect {
	
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.patientSignup(..))")
	public void patientSignupBefore() {
		
		System.out.println(" ## SignUp Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.patientSignup(..))")
	public void patientSignupLogingBefore() {
	
		System.out.println("## Sign Up successfull");
	}
	
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.patientLogin(..))")
	public void patientLogin() {
		
		System.out.println("loging Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.patientLogin(..))")
	public void patientLoginafter() {
		
		System.out.println("## Login successfull");
	}
	
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.editProfile(..))")
	public void editProfile() {
		
		System.out.println(" ## profile edited Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.editProfile(..))")
	public void editProfileAfter() {
		
		System.out.println("## profile edited successfull");
	}
	
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.resetPassword(..))")
	public void resetPassword() {
		
		System.out.println(" ## Password reset Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.resetPassword(..))")
	public void resetPasswordAfter() {
		
		System.out.println("## Password reset successfull");
	}
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.showProfile(..))")
	public void showProfile() {
		
		System.out.println(" ## SignUp Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.showProfile(..))")
	public void showProfileAfter() {
		
		System.out.println("## Profile viewed successfull");
	}
	
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.makeAppointment(..))")
	public void makeAppointment() {
		
		System.out.println(" ## Appointment Send Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.makeAppointment(..))")
	public void makeAppointmentAfter() {
		
		System.out.println("## Appointment Send successfull");
	}
	
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.admitForm(..))")
	public void admitForm() {
		
		System.out.println(" ## Admit form Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.admitForm(..))")
	public void admitFormAfter() {
		
		System.out.println("## Admit form submit successfull");
	}
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.viewAppointmentHistory(..))")
	public void viewAppointmentHistory() {
		
		System.out.println(" ## view appoinment Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.viewAppointmentHistory(..))")
	public void viewAppointmentHistoryAfter() {
		
		System.out.println("## view appoinment  successfull");
	}
	@Before("execution(* com.spring.boot.project2.controller.PatientController+.viewAdmitFormHistory(..))")
	public void viewAdmitFormHistory() {
		
		System.out.println(" ## view Admit Start");
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.viewAdmitFormHistory(..))")
	public void viewAdmitFormHistoryAfter() {
		
		System.out.println("## view Admit form successfull");
	}
	@Before("execution(* com.spring.boot.project2.controller.PatientController.viewBill(..))")
	public void viewBill() {
		
		
	}
	@After("execution(* com.spring.boot.project2.controller.PatientController+.viewBill(..))")
	public void viewBillAfter() {
		
		System.out.println("## view Bill successfull");
	}


}
