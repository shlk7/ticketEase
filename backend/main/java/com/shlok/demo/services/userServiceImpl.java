package com.shlok.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shlok.demo.dao.UserDao;
import com.shlok.demo.entities.Users;

@Service
public class userServiceImpl implements userService {
	
	@Autowired
	private UserDao usd;
	
	
	public userServiceImpl() {
		
	}

	@Override
	public List<Users> getUsers() {
		return usd.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Users getUser(long uId) {
		return usd.getOne(uId);
	}

	@Override
	public Users addUser(Users us) {
		usd.save(us);
		System.out.println(us);
		return us;
	}

}
