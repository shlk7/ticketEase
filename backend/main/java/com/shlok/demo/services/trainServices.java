package com.shlok.demo.services;

import java.util.List;

import com.shlok.demo.entities.Trains;

public interface trainServices {


	List<Trains> getTrains();

	Trains getTrain(long trainId);

	Trains addTrain(Trains tr);

	

}
