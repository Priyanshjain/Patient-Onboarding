package com.spring.boot.project2.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Entity
@Table(name = "admitdetails")
public class Admit 
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int admitId;
	private int patientId;
	private String patientName;
	private String gender;
	private String phoneNumber;
	private String email;
	private String address;
	private String ward;
	private String reason;
	private String admitDateAndTime;
	private String admitStatus="Rejected"; 
}
