package com.spring.boot.project2.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Formula;

import lombok.Data;


@Data
@Entity
@Table(name = "billDetails")
public class Bill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int billNo;
	private int patientId;
	private int medicinePrice;
	private int quantity;
	private int surgeryCost;
	private int appointmentCost;
	private int doctorFees;
	private int hospitalCharges;
	private int otherCharges;
//	@Formula("medicinePrice*quantity+surgeryCost+appointmentCost+doctorFees+hospitalCharges+otherCharges")
	private int totalAmount;
}
