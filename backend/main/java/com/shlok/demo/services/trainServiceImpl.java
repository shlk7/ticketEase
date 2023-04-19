package com.shlok.demo.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shlok.demo.dao.TrainDao;
import com.shlok.demo.dao.UserDao;
import com.shlok.demo.entities.Trains;
import com.shlok.demo.entities.Users;

@Service
public class trainServiceImpl implements trainServices {
//	List<Trains> list;
	
	@Autowired
	private TrainDao tda;
	
	@Autowired
	private UserDao uda;
	
	public trainServiceImpl() {
//		list=new ArrayList<>();
//		list.add(new Trains(54,"ijhu","jytftf","juyfff"));
//		list.add(new Trains(67,"jcyytc","gvgh","vnvhn"));
//		list.add(new Trains(90,"dss","ljjh","dse"));
	}


	@Override
	public List<Trains> getTrains() {
		// TODO Auto-generated method stub
		return tda.findAll();
	}


	@SuppressWarnings("deprecation")
	@Override
	public Trains getTrain(long trainId) {
//		System.out.print(trainId);
		
		return tda.getOne(trainId);
	}


	@SuppressWarnings("deprecation")
	@Override
	public Trains addTrain(Trains tr,long userId) {
		// validate User
		Users currUser = uda.getOne(userId);
		if(!(currUser.isLoggedIn() && currUser.isAdmin()))
			return null;
				
				
		tda.save(tr);
		
		return tr;
	}


	@SuppressWarnings("deprecation")
	@Override
	public void deleteTrain(long trainId) {
		// TODO Auto-generated method stub
		Trains entity=tda.getOne(trainId);
		tda.delete(entity);
	}


}
