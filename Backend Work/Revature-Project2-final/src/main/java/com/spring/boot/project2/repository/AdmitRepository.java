package com.spring.boot.project2.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.spring.boot.project2.model.Admit;
import com.spring.boot.project2.model.Appointment;

public interface AdmitRepository extends CrudRepository<Admit, Integer>
{
	public List<Admit> findByPatientId(int patientId);
}
