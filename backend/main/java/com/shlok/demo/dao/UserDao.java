package com.shlok.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shlok.demo.entities.Users;

public interface UserDao extends JpaRepository<Users,Long> {
	public Users findByEmail(String email);

}
