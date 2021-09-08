package com.spring.boot.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.stereotype.Component;

import lombok.Data;


@Data
@Entity
@Table(name = "patientdetails")
public class Patient 
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int patientId;
	private String patientName;
	private String patientAge;
	private String gender;
	private String password;
	private String phoneNumber;
	private String email;
	private String address;
	private String idProof;

}
