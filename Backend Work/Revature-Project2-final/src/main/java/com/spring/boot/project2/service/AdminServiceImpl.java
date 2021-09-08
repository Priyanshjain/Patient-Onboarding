package com.spring.boot.project2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.boot.project2.model.Admin;
import com.spring.boot.project2.model.Admit;
import com.spring.boot.project2.model.Appointment;
import com.spring.boot.project2.model.Bill;
import com.spring.boot.project2.model.Doctor;
import com.spring.boot.project2.model.Patient;
import com.spring.boot.project2.repository.AdminRepository;
import com.spring.boot.project2.repository.AdmitRepository;
import com.spring.boot.project2.repository.AppointmentRepository;
import com.spring.boot.project2.repository.BillRepository;
import com.spring.boot.project2.repository.DoctorRepository;
import com.spring.boot.project2.repository.PatientRepository;

@Service
public class AdminServiceImpl implements AdminService 
{
	
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	DoctorRepository doctorRepository;
	@Autowired
	PatientRepository patientRepository;
	@Autowired
	AdmitRepository admitRepository;
	@Autowired
	AppointmentRepository appointmentRepository;
	@Autowired
	BillRepository billRepository;
	
	@Override
	public int adminSignup(Admin admin) {
		System.out.println("Admin Signup called");
		adminRepository.save(admin);
		int adminId = admin.getAdminId();
		return adminId;
	}

	@Override
	public Admin adminLogin(int adminId, String password) {
		System.out.println("Admin Login called");
		return adminRepository.findByAdminIdAndPassword(adminId,password);
			
	}

	@Override
	public boolean isAdminExists(int adminId) {
		Optional<Admin> adminData = adminRepository.findById(adminId);
		return adminData.isPresent();
	}
	
	@Override
	public List<Admin> viewAdmin() {
		System.out.println("Listing Admin details");
		return (List<Admin>) adminRepository.findAll();
	}
	
	@Override
	public Admin viewAdminById(int adminId) {
		System.out.println("View Admin By Id called");
		Optional<Admin> adminData = adminRepository.findById(adminId);
		Admin admin = adminData.get();
		return admin;
	}
	
	@Override
	public boolean editProfile(Admin admin) {
		// TODO Auto-generated method stub
		adminRepository.save(admin);
		return true;
	}
	
	
	

	@Override
	public List<Patient> viewAllPatient() {
		System.out.println("Listing patient details");
		return (List<Patient>) patientRepository.findAll();
	}

	@Override
	public Patient viewPatientById(int patientId) {
		System.out.println("view patient by id called");
		Optional<Patient> patientData = patientRepository.findById(patientId);
		Patient patient = patientData.get();
		return patient;
	}

	@Override
	public boolean deletePatient(int patientId) {
		System.out.println("delete patient called");
		patientRepository.deleteById(patientId);
		return true;
	}

	@Override
	public boolean updatePatient(Patient patient) {
		System.out.println("update patient called");
		patientRepository.save(patient);
		return true;
	}
	
	@Override
	public boolean isPatientExists(int patientId) {
		Optional<Patient> patientData = patientRepository.findById(patientId);
		return patientData.isPresent();
	}
	
	
	
	@Override
	public List<Doctor> viewDoctorList() {
		System.out.println("view doctor lists");
		return (List<Doctor>) doctorRepository.findAll();
	}
	
	@Override
	public Doctor viewDoctorById(int doctorId) {
		System.out.println("getting doctor by id");
		Optional<Doctor> doctorData = doctorRepository.findById(doctorId);
		Doctor doctor = doctorData.get();
		return doctor;
	}

	@Override
	public boolean addDoctor(Doctor doctor) {
		System.out.println("adding doctor called");
		if(doctorRepository.save(doctor) != null)
			return true;
		else
			return false;
	}
	
	@Override
	public boolean isDoctorExists(int doctorId)
	{
		Optional<Doctor> doctorData = doctorRepository.findById(doctorId);
		return doctorData.isPresent();
	}
	
	@Override
	public boolean deleteDoctor(int doctorId) {
		System.out.println("delete doctor called");
		doctorRepository.deleteById(doctorId);
		return true;
	}


	
	@Override
	public boolean approveAppointment(int appointmentToken) {
		System.out.println("Approving appoiuntment");
		String status = "Approved";
//		appointmentRepository.updateAppointmentStatus(appointmentToken,status);
		return true;
	}
	
	@Override
	public boolean approveAdmit(int patientId) {
		// TODO Auto-generated method stub
		return false;
	}

	
	@Override
	public Appointment getAppointmentById(int appointmentId) {
		System.out.println("Getting appointment by id");
		Optional<Appointment> Data = appointmentRepository.findById(appointmentId);
		Appointment appointment = Data.get();
		return appointment;
	}
	
	@Override
	public List<Appointment> viewAppointments() {
		System.out.println("view apppointment list");
		return (List<Appointment>) appointmentRepository.findAll();
	}
	
	@Override
	public boolean isAppointmentExists(int appointmentToken) {
		Optional<Appointment> appointmentData = appointmentRepository.findById(appointmentToken);
		return appointmentData.isPresent();
	}

	

	@Override
	public List<Admit> admitDetails() {
		System.out.println("view admit list");
		return (List<Admit>) admitRepository.findAll();
	}

	
	@Override
	public boolean addBill(Bill bill) {
		billRepository.save(bill);
		return true;
	}

	@Override
	public Admit getAdmitFormById(int admitId) {
		Optional<Admit> Data = admitRepository.findById(admitId);
		Admit admit = Data.get();
		return admit;
	}

	@Override
	public boolean isAdmitFormExists(int admitId) {
		Optional<Admit> Data = admitRepository.findById(admitId);
		return Data.isPresent();
	}

	

	

	
	

	

}
