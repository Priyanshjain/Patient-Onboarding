package com.spring.boot.project2.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.spring.boot.project2.service.PatientService;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {

	@Autowired
	PatientService patientService;

	@PostMapping
	public ResponseEntity<Integer> patientSignup(@RequestBody Patient patient) {
		ResponseEntity<Integer> responseEntity = null;
		int patientId;

		patientId = patientService.patientSignup(patient);
		
		responseEntity = new ResponseEntity<Integer>(patientId, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("{patientId}/{password}")
	public ResponseEntity<Patient> patientLogin( @PathVariable("patientId") int patientId,@PathVariable("password") String password) 
	{
		ResponseEntity<Patient> responseEntity = null;
		Patient patient = new Patient();
		String message = null;
		if (patientService.isPatientExists(patientId)) {
			patient = patientService.showProfile(patientId);
			if(patient.getPassword().equals(password)) {
				message = "Login Successfully ";
				responseEntity = new ResponseEntity<Patient>(patient, HttpStatus.NO_CONTENT);
			}
			else {
				message = "AdminId/Password is incorrect ";
//				System.out.println("passwordcaleed");
				responseEntity = new ResponseEntity<Patient>(patient, HttpStatus.NOT_FOUND);
			}
		}
		else
		{
			message = "AdminId/Password is incorrect ";
			System.out.println("passwordcaleed");
			responseEntity = new ResponseEntity<Patient>(patient, HttpStatus.NOT_FOUND);
		}
		return responseEntity;
	}
	

	@PutMapping("/editProfile/{patientId}")
	public ResponseEntity<String> editProfile(@RequestBody Patient patient,@PathVariable("patientId") int patientId) {
		ResponseEntity<String> responseEntity = null;
		String message = null;

		if (patientService.isPatientExists(patientId)) {
			patient.setPatientId(patientId);
			patientService.editProfile(patient);
			message = "updated successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		} else {
			message = "Patient ID is not Exist";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		}
		return responseEntity;
	}
	@PutMapping("/resetPassword/{patientId}")
	public ResponseEntity<String> resetPassword(@RequestBody ForgetPassowrd forget, @PathVariable("patientId") int patientId) {
		ResponseEntity<String> responseEntity = null;
		String message = null;
		Patient patient = new Patient();
//		int patientId = forget.getId();
		if (patientService.isPatientExists(patientId)) {
			patient = patientService.getPatientById(patientId);
			patient.setPatientId(patientId);
			patient.setPassword(forget.getPassword());
			patientService.editProfile(patient);
			message = "updated successfully";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		} else {
			message = "Patient ID is not Exist";
			responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
		}
		return responseEntity;
	}

	@GetMapping("{patientId}")
	public ResponseEntity<Patient> showProfile(@PathVariable("patientId") int patientId) {
		ResponseEntity<Patient> responseEntity = null;
		Patient patient = new Patient();
		if (patientService.isPatientExists(patientId)) {
			patient = patientService.showProfile(patientId);
			responseEntity = new ResponseEntity<Patient>(patient, HttpStatus.OK);
		} else {
			responseEntity = new ResponseEntity<Patient>(patient, HttpStatus.NO_CONTENT);
		}
		return responseEntity;
	}

	@PostMapping("/makeAppointment")
	public ResponseEntity<String> makeAppointment(@RequestBody Appointment appointment) {
		ResponseEntity<String> responseEntity = null;
		String message = null;
		patientService.makeAppointment(appointment);
		message = "Appointment is Booked successfully";
		responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		return responseEntity;
	}

	@PostMapping("/admitForm")
	public ResponseEntity<String> admitForm(@RequestBody Admit admit) {
		ResponseEntity<String> responseEntity = null;
		String message = null;
		patientService.admitForm(admit);
		message = "Admit Form is Send successfully";
		responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
		return responseEntity;
	}
	
	@GetMapping("/appointmentHistory/{patientId}")
	public ResponseEntity<List<Appointment>> viewAppointmentHistory(@PathVariable("patientId") int patientId) {

		ResponseEntity<List<Appointment>> responseEntity = null;
		List<Appointment> appointments = new ArrayList<Appointment>();
		if (patientId==0) 
		{
			appointments = patientService.viewAppointmentHistory(patientId);
		} else {
			appointments = (List<Appointment>) patientService.viewAppointmentHistory(patientId);
			}
		if(appointments.size()==0)
		{
			responseEntity = new ResponseEntity<List<Appointment>>(appointments, HttpStatus.NO_CONTENT);
		}else {
			responseEntity = new ResponseEntity<List<Appointment>>(appointments, HttpStatus.OK);
			
		}
		return responseEntity;
	}
	
	@GetMapping("/admitFormHistory/{patientId}")
	public ResponseEntity<List<Admit>> viewAdmitFormHistory(@PathVariable("patientId") int patientId) {

		ResponseEntity<List<Admit>> responseEntity = null;
		List<Admit> admits = new ArrayList<Admit>();
		if (patientId==0) 
		{
			admits = patientService.viewAdmitFormHistory(patientId);
		} else {
			admits = (List<Admit>) patientService.viewAdmitFormHistory(patientId);
			}
		if(admits.size()==0)
		{
			responseEntity = new ResponseEntity<List<Admit>>(admits, HttpStatus.NO_CONTENT);
		}else {
			responseEntity = new ResponseEntity<List<Admit>>(admits, HttpStatus.OK);
			
		}
		return responseEntity;
	}
	
	@GetMapping("/viewBill/{patientId}")
	public ResponseEntity<List<Bill>> viewBill(@PathVariable("patientId") int patientId) {
		ResponseEntity<List<Bill>> responseEntity = null;
		List<Bill> bills = new ArrayList<Bill>();
		if (patientId==0) 
		{
			bills = patientService.viewBill(patientId);
		} else {
			bills = (List<Bill>) patientService.viewBill(patientId);
			}
		if(bills.size()==0)
		{
			responseEntity = new ResponseEntity<List<Bill>>(bills, HttpStatus.NO_CONTENT);
		}else {
			responseEntity = new ResponseEntity<List<Bill>>(bills, HttpStatus.OK);
			
		}
		return responseEntity;
	}
}
