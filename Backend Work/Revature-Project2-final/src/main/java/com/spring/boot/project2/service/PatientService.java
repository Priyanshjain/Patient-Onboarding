package com.spring.boot.project2.service;

import java.util.List;

import com.spring.boot.project2.model.Admit;
import com.spring.boot.project2.model.Appointment;
import com.spring.boot.project2.model.Bill;
import com.spring.boot.project2.model.Patient;

public interface PatientService 
{
	public int patientSignup(Patient patient);
	public Patient patientLogin(int patientId, String password);
	public boolean isPatientExists(int patientId);
	public Patient showProfile(int patientId);
	public boolean editProfile(Patient patient);
	
	public boolean makeAppointment(Appointment appointment);
	public boolean admitForm(Admit admit);
	public List<Appointment> viewAppointmentHistory(int patientId);
	public List<Admit> viewAdmitFormHistory(int patientId);
	
	public List<Bill> viewBill(int patientId);
	public Patient getPatientById(int patientId);
	
}
