package com.spring.boot.project2.repository;

import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.spring.boot.project2.model.Admin;
import com.spring.boot.project2.model.Appointment;
import com.spring.boot.project2.model.Patient;

@Repository
@Transactional(readOnly = true)
public class CustomRepositoryImpl implements CustomRepository
{

	@PersistenceContext
    EntityManager entityManager;
	
	@Override
	public boolean adminExistsById(int adminId, String password) 
	{
		Query query = entityManager.createNativeQuery("select * from admin_details where admin_id=? and password=?", Admin.class);
		 query.setParameter(1, adminId);
		 query.setParameter(2, password);
		 List list = query.getResultList();
		 if(list == null || list.size() == 0)
			 return false;
		 else
			 return true;
	}
	
	@Override
	public boolean patientExistsById(int patientId, String password) 
	{
		Query query = entityManager.createNativeQuery("select * from patient_details where patient_id=? and password=?", Patient.class);
		 query.setParameter(1, patientId);
		 query.setParameter(2, password);
		 List list = query.getResultList();
		 if(list == null || list.size() == 0)
			 return false;
		 else
			 return true;
	}
	
	/*
	 * @Override public void updateAppointmentStatus(int appointmentToken,String
	 * status) { Query query = entityManager.
	 * createQuery("UPDATE appointmentdetails SET appointment_status=?1 where appointment_token=?2"
	 * , Appointment.class); query.setParameter(1, status); query.setParameter(2,
	 * appointmentToken); query.executeUpdate(); }
	 */
	 
//	@Override
//	public List<Appointment> ViewAppointmentByPatientId(int patientId) 
//	{
//		Query query = entityManager.createNativeQuery("select * from appointmentdetails where patient_id=?",  Appointment.class);
//		 query.setParameter(1, patientId);
//		 List list = query.getResultList();
//		 return list;
//	}

}
