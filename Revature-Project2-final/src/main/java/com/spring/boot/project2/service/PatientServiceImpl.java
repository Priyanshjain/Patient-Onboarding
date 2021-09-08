package com.spring.boot.project2.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.boot.project2.model.Admit;
import com.spring.boot.project2.model.Appointment;
import com.spring.boot.project2.model.Bill;
import com.spring.boot.project2.model.Patient;
import com.spring.boot.project2.repository.AdmitRepository;
import com.spring.boot.project2.repository.AppointmentRepository;
import com.spring.boot.project2.repository.BillRepository;
import com.spring.boot.project2.repository.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	AppointmentRepository appointmentRepository;
	
	@Autowired
	AdmitRepository admitRepository;
	
	@Autowired
	BillRepository billRepository;
	
	@Override
	public int patientSignup(Patient patient) {
		System.out.println("Patient Signup Called");
		patientRepository.save(patient);
		int patientId = patient.getPatientId();
		return patientId;
	}

	@Override
	public Patient patientLogin(int patientId, String password) {
		System.out.println("Patient Login called");
		return patientRepository.findByPatientIdAndPassword(patientId, password);
	}

	@Override
	public boolean isPatientExists(int patientId) {
		// TODO Auto-generated method stub
		Optional<Patient> patientData = patientRepository.findById(patientId);
		return patientData.isPresent();
	}

	@Override
	public Patient showProfile(int patientId) {
		Optional<Patient> patientData = patientRepository.findById(patientId);
		Patient patient = patientData.get();
		return patient;
	}

	@Override
	public boolean editProfile(Patient patient) {
		// TODO Auto-generated method stub
		patientRepository.save(patient);
		return true;
	}

	@Override
	public boolean makeAppointment(Appointment appointment) {
		// TODO Auto-generated method stub
		appointmentRepository.save(appointment);
		return true;
	}

	@Override
	public boolean admitForm(Admit admit) {
		admitRepository.save(admit);
		return true;
	}

	@Override
	public List<Bill> viewBill(int patientId) {
		return (List<Bill>) billRepository.findByPatientId(patientId);
	}

	@Override
	public List<Appointment> viewAppointmentHistory(int patientId) {
		return (List<Appointment>) appointmentRepository.findByPatientId(patientId);
	}

	@Override
	public List<Admit> viewAdmitFormHistory(int patientId) {
		// TODO Auto-generated method stub
		return (List<Admit>) admitRepository.findByPatientId(patientId);
	}
	@Override
	public Patient getPatientById(int patientId) {
		System.out.println("view patient by id called");
		Optional<Patient> patientData = patientRepository.findById(patientId);
		Patient patient = patientData.get();
		return patient;
	}

}
