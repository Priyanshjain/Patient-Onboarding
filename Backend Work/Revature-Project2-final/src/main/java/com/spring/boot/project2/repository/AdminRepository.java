package com.spring.boot.project2.repository;

import org.springframework.data.repository.CrudRepository;

import com.spring.boot.project2.model.Admin;

public interface AdminRepository extends CrudRepository<Admin, Integer> , CustomRepository
{
	
	public Admin findByAdminIdAndPassword(int adminId, String password);
	

}
