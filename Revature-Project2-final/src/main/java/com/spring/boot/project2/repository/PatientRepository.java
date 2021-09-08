package com.spring.boot.project2.repository;

import org.springframework.data.repository.CrudRepository;

import com.spring.boot.project2.model.Patient;

public interface PatientRepository extends CrudRepository<Patient, Integer>, CustomRepository 
{
	public Patient findByPatientIdAndPassword(int PatientId, String password);

}
