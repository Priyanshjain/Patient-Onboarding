package com.spring.boot.project2.service;

import java.util.List;

import com.spring.boot.project2.model.Admin;
import com.spring.boot.project2.model.Admit;
import com.spring.boot.project2.model.Appointment;
import com.spring.boot.project2.model.Bill;
import com.spring.boot.project2.model.Doctor;
import com.spring.boot.project2.model.Patient;

public interface AdminService {
	 
	public int adminSignup(Admin admin);
	public Admin adminLogin(int adminId, String password);
	public boolean isAdminExists(int adminId);
	public List<Admin> viewAdmin();
	public Admin viewAdminById(int adminId);
	
	public List<Patient> viewAllPatient();
	public Patient viewPatientById(int patientId);
	public boolean isPatientExists(int patientId);
	public boolean deletePatient(int patientId);
	public boolean updatePatient(Patient patient);
	
	public List<Doctor> viewDoctorList();
	public Doctor viewDoctorById(int doctorId);
	public boolean addDoctor(Doctor doctor);
	public boolean isDoctorExists(int doctorId);
	public boolean deleteDoctor(int doctorId);
	
	public boolean approveAppointment(int appointmentId);
	public Appointment getAppointmentById(int appointmentId);
	public boolean isAppointmentExists(int appointmentToken);
	public List<Appointment> viewAppointments();
	
	public List<Admit> admitDetails();
	public boolean approveAdmit(int patientId);
	public Admit getAdmitFormById(int admitId);
	public boolean isAdmitFormExists(int admitId);
	
	public boolean addBill(Bill bill);
	public boolean editProfile(Admin admin);
	
}
