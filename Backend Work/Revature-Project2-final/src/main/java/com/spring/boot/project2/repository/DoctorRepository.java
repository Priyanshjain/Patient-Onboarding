package com.spring.boot.project2.repository;

import org.springframework.data.repository.CrudRepository;

import com.spring.boot.project2.model.Doctor;

public interface DoctorRepository extends CrudRepository<Doctor, Integer>
{

}
