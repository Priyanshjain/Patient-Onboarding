package com.spring.boot.project2.repository;

import java.util.List;

import com.spring.boot.project2.model.Appointment;

public interface CustomRepository 
{
	
	//public void updateAppointmentStatus(int appointmentToken,String status);
	public boolean adminExistsById(int adminId, String password);
	public boolean patientExistsById(int patientId, String password);
//	public  List<Appointment> ViewAppointmentByPatientId(int patientId);
	
}
