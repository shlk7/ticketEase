package com.shlok.demo.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shlok.demo.dao.TrainDao;
import com.shlok.demo.entities.Trains;

@Service
public class trainServiceImpl implements trainServices {
//	List<Trains> list;
	
	@Autowired
	private TrainDao tda;
	
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


	@Override
	public Trains addTrain(Trains tr) {
		tda.save(tr);
		
		return tr;
	}


}
