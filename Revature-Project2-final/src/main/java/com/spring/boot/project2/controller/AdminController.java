package com.spring.boot.project2.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.project2.model.Admin;
import com.spring.boot.project2.model.Admit;
import com.spring.boot.project2.model.Appointment;
import com.spring.boot.project2.model.Bill;
import com.spring.boot.project2.model.Doctor;
import com.spring.boot.project2.model.ForgetPassowrd;
import com.spring.boot.project2.model.Patient;
import com.spring.boot.project2.service.AdminService;
import com.spring.boot.project2.service.PatientService;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController 
{
	@Autowired
	AdminService adminService;
	
	@Autowired
	PatientService patientService;
	
	@PostMapping
	public ResponseEntity<Integer> adminSignup(@RequestBody Admin admin) 
	{
		ResponseEntity<Integer> responseEntity = null;
		
		int id = adminService.adminSignup(admin);
		responseEntity = new ResponseEntity<Integer>(id, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("{adminId}/{password}")
	public ResponseEntity<Admin> adminLogin( @PathVariable("adminId") int adminId,@PathVariable("password") String password) 
	{
		ResponseEntity<Admin> responseEntity = null;
		Admin admin = new Admin();
		String message = null;
		System.out.println(password+" hvhgchg "+adminId);
		
		if (adminService.isAdminExists(adminId)) {
			admin = adminService.viewAdminById(adminId);
			if(admin.getPassword().equals(password)) {
				message = "Login Successfully ";
				responseEntity = new ResponseEntity<Admin>(admin, HttpStatus.NO_CONTENT);
			}
			else {
				message = "AdminId/Password is incorrect ";
//				System.out.println("passwordcaleed");
				responseEntity = new ResponseEntity<Admin>(admin, HttpStatus.NOT_FOUND);
			}
		}
		else
		{
			message = "AdminId/Password is incorrect ";
			System.out.println("passwordcaleed");
			responseEntity = new ResponseEntity<Admin>(admin, HttpStatus.NOT_FOUND);
		}
		return responseEntity;
	}
	
	@PutMapping("/editProfile/{adminId}")
	public ResponseEntity<String> editAdminProfile(@RequestBody Admin admin,@PathVariable("adminId") int adminId) {
		ResponseEntity<String> responseEntity = null;
		String message = null;

		if (adminService.isAdminExists(adminId)) {
			admin.setAdminId(adminId);
			adminService.editProfile(admin);
			message = "updated successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		} else {
			message = "Admin ID is not Exist";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		}
		return responseEntity;
	}
	
	@PutMapping("/resetPassword/{adminId}")
	public ResponseEntity<String> resetPassword(@RequestBody ForgetPassowrd forget, @PathVariable("adminId") int adminId) {
		ResponseEntity<String> responseEntity = null;
		String message = null;
		Admin admin = new Admin();
//		int adminId = forget.getId();
		if (adminService.isAdminExists(adminId)) {
			admin = adminService.viewAdminById(adminId);
			admin.setAdminId(adminId);
			admin.setPassword(forget.getPassword());
			adminService.editProfile(admin);
			message = "updated successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		} else {
			message = "Patient ID is not Exist";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
		}
		return responseEntity;
	}
	
	@GetMapping
	public ResponseEntity<List<Admin>> viewAdmin() 
	{
		ResponseEntity<List<Admin>> responseEntity = null;
		List<Admin> admins = new ArrayList<Admin>();
		admins = adminService.viewAdmin();
		responseEntity = new ResponseEntity<List<Admin>>(admins, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("{adminId}")
	public ResponseEntity<Admin> viewAdminById(@PathVariable("adminId") int adminId) {
		ResponseEntity<Admin> responseEntity = null;
		Admin admin = new Admin();
		if (adminService.isAdminExists(adminId)) {
			admin = adminService.viewAdminById(adminId);
			System.out.println("get admin id called");
			responseEntity = new ResponseEntity<Admin>(admin, HttpStatus.OK);
		} else {
			responseEntity = new ResponseEntity<Admin>(admin, HttpStatus.NO_CONTENT);
		}
		return responseEntity;
	}
	
	@GetMapping("/patients")
	public ResponseEntity<List<Patient>> viewPatient() 
	{
		ResponseEntity<List<Patient>> responseEntity = null;
		List<Patient> patients = new ArrayList<Patient>();
		patients = adminService.viewAllPatient();
		responseEntity = new ResponseEntity<List<Patient>>(patients, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("patients/{patientId}")
	public ResponseEntity<Patient> viewPatientById(@PathVariable("patientId") int patientId) {
		ResponseEntity<Patient> responseEntity = null;
		Patient patient = new Patient();
		if (adminService.isPatientExists(patientId)) {
			patient = adminService.viewPatientById(patientId);
			responseEntity = new ResponseEntity<Patient>(patient, HttpStatus.OK);
		} else {
			responseEntity = new ResponseEntity<Patient>(patient, HttpStatus.OK);
		}
		return responseEntity;
	}
	
	@DeleteMapping("patients/{patientId}")
	public ResponseEntity<String> deletePatient(@PathVariable("patientId") int patientId) {
		ResponseEntity<String> responseEntity = null;
		String message = null;
		if (adminService.isPatientExists(patientId)) {
			adminService.deletePatient(patientId);
			message="Patient details Deleted Successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
			System.out.println("delete Patient");
		} else {
			message="Deletion failed,The patient with that patient Id doesnt exists";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
		}
		return responseEntity;
	}
	

	
	@PostMapping("/addDoctor")
	public ResponseEntity<String> addDoctor(@RequestBody Doctor doctor) 
	{
		ResponseEntity<String> responseEntity = null;
		String message = null;
		int doctorId = doctor.getDoctorId();
		if (adminService.isDoctorExists(doctorId)) {
			message = "Doctor Id already exixts";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
		} else {
			adminService.addDoctor(doctor);
			message = "Doctor added successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		}
		return responseEntity;
	}
	

	
	@GetMapping("/doctors")
	public ResponseEntity<List<Doctor>> viewDoctorList() 
	{
		ResponseEntity<List<Doctor>> responseEntity = null;
		List<Doctor> doctors = new ArrayList<Doctor>();
		doctors = adminService.viewDoctorList();
		responseEntity = new ResponseEntity<List<Doctor>>(doctors, HttpStatus.OK);
		return responseEntity;
	}
	
	@DeleteMapping("/doctor/{doctorId}")
	public ResponseEntity<String> deleteDoctor(@PathVariable("doctorId") int doctorId) {
		ResponseEntity<String> responseEntity = null;
		String message = null;
		if (adminService.isDoctorExists(doctorId)) {
			adminService.deleteDoctor(doctorId);
			message = "Doctor deleted successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		} else {
			message = "Deleting Doctor detail failed";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
		}
		return responseEntity;
	}
	
	
	
	@GetMapping("/appointment")
	public ResponseEntity<List<Appointment>> viewAppointments() 
	{
		ResponseEntity<List<Appointment>> responseEntity = null;
		List<Appointment> appointments = new ArrayList<Appointment>();
		appointments = adminService.viewAppointments();
		responseEntity = new ResponseEntity<List<Appointment>>(appointments, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("appointment/{appointmentToken}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable("appointmentToken") int appointmentToken) {
		ResponseEntity<Appointment> responseEntity = null;
		Appointment appointment = new Appointment();
		if (adminService.isAppointmentExists(appointmentToken)) {
			appointment = adminService.getAppointmentById(appointmentToken);
			responseEntity = new ResponseEntity<Appointment>(appointment, HttpStatus.OK);
		} else {
			responseEntity = new ResponseEntity<Appointment>(appointment, HttpStatus.OK);
		}
		return responseEntity;
	}
	
	@PutMapping("appointment/{appointmentToken}")
	public ResponseEntity<String> approveAppointment(@PathVariable("appointmentToken") int appointmentToken) {
		ResponseEntity<String> responseEntity = null;
		Appointment appointment = new Appointment();
		String message = null;
		if (adminService.isAppointmentExists(appointmentToken)) {
			appointment = adminService.getAppointmentById(appointmentToken);
			appointment.setAppointmentStatus("Approved");
			patientService.makeAppointment(appointment);
//			adminService.approveAppointment(appointmentToken);
			message="Appointment approved Successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		} else {
			message="Approved failed,The appointment with that appointment Id doesnt exists";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
		}
		return responseEntity;
	}
	@PutMapping("admit/{admitToken}")
	public ResponseEntity<String> admitDetailsById(@PathVariable("admitToken") int admitToken) {
		ResponseEntity<String> responseEntity = null;
		Admit admit = new Admit();
		String message = null;
		if (adminService.isAdmitFormExists(admitToken)) {
			admit = adminService.getAdmitFormById(admitToken);
			admit.setAdmitStatus("Approved");
			patientService.admitForm(admit);
//			adminService.approveAppointment(appointmentToken);
			message="Appointment approved Successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		} else {
			message="Approved failed,The appointment with that appointment Id doesnt exists";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
		}
		return responseEntity;
	}
	

	
	
	@GetMapping("/admit")
	public ResponseEntity<List<Admit>> admitDetails() 
	{
		ResponseEntity<List<Admit>> responseEntity = null;
		List<Admit> admits = new ArrayList<Admit>();
		admits = adminService.admitDetails();
		responseEntity = new ResponseEntity<List<Admit>>(admits, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("admitForm/{admitId}")
	public ResponseEntity<Admit> getAdmitFormById(@PathVariable("admitId") int admitId) {
		ResponseEntity<Admit> responseEntity = null;
		Admit admit = new Admit();
		if (adminService.isAdmitFormExists(admitId)) {
			admit = adminService.getAdmitFormById(admitId);
			responseEntity = new ResponseEntity<Admit>(admit, HttpStatus.OK);
		} else {
			responseEntity = new ResponseEntity<Admit>(admit, HttpStatus.OK);
		}
		return responseEntity;
	}
	
	@PostMapping("/addBill")
	public ResponseEntity<String> addBill(@RequestBody Bill bill) {
		ResponseEntity<String> responseEntity = null;
		System.out.println(bill.getOtherCharges());
		int totalBill = bill.getMedicinePrice()*bill.getQuantity()+bill.getSurgeryCost()+bill.getAppointmentCost()+bill.getAppointmentCost()+bill.getAppointmentCost()+bill.getAppointmentCost();
		bill.setTotalAmount(totalBill);
		String message = null;
		adminService.addBill(bill);
		message = "Patient Bill data saved successfully";
		responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		return responseEntity;
	}
}
