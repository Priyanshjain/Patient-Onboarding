package com.spring.boot.project2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Data;

@Data
@Entity
@Table(name = "admindetails")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int adminId;
	private String adminName;
	private String password;
	@Transient
	private String confirmPassword;
	private String phoneNumber;
	private String gender;
	private String email;
	private String address;
	private int age;
}
