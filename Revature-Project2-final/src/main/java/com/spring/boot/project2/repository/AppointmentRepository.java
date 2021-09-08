package com.spring.boot.project2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.spring.boot.project2.model.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Integer> , CustomRepository
{
	public List<Appointment> findByPatientId(int patientId);
	
//	@Modifying
//	@Query("UPDATE appointmentdetails ad SET ad.appointmentStatus= :status where ad.appointmentToken= :appointmentToken ")
//	public void updateAppointmentStatus(@Param("appointmentToken") int appointmentToken,@Param("status") String status);
}
