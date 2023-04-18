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

	@Override
	public Users findByEmail(Users us) {
		// TODO Auto-generated method stub
//		System.out.println(us.getEmail());
		Users currUser =  usd.findByEmail(us.getEmail());
//		System.out.println(us.getPassword() + " " + currUser.getPassword());
		
		if(us.getPassword().equals(currUser.getPassword())) {
//			System.out.println("matched");
			currUser.setLoggedIn(true);
			usd.save(currUser);
			return currUser;
		}
		
		return null;
	}

	@Override
	public Users logout(long userId) {
		// TODO Auto-generated method stub
		Users user=usd.getOne(userId);
		user.setLoggedIn(false);
		usd.save(user);
		System.out.println(user.isLoggedIn());
		return user;
	}

	

	
	

}
