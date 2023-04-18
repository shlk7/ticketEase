package com.shlok.demo.services;

import java.util.List;

import com.shlok.demo.entities.Users;

public interface userService {

	List<Users> getUsers();
	
	Users getUser(long uId);

	Users addUser(Users us);

	Users findByEmail(Users us);

	Users logout(long userId);

	

}
