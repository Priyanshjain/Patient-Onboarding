package com.spring.boot.project2.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.spring.boot.project2.model.Bill;

public interface BillRepository extends CrudRepository<Bill, Integer> {
	
	public List<Bill> findByPatientId(int patientId);

}
