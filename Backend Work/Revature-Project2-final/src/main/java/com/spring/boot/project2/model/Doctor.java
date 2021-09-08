package com.spring.boot.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "doctorDetails")
public class Doctor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int doctorId;
	private String doctorName;
	private String qualification;
	private String department;
	private String expertise;

}
