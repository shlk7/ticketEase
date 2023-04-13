package com.shlok.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shlok.demo.dao.TicketDao;
import com.shlok.demo.dao.TrainDao;
import com.shlok.demo.entities.Tickets;
import com.shlok.demo.entities.Trains;

@Service
public class ticketServiceImpl implements ticketService {
	
	@Autowired
	private TicketDao ticketD;
	
	@Autowired
	private TrainDao tda;
	
	public ticketServiceImpl() {
		
	}

	@Override
	public List<Tickets> getTickets() {
		// TODO Auto-generated method stub
		return ticketD.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Tickets getTickets(long tickesId) {
		// TODO Auto-generated method stub
		return ticketD.getOne(tickesId);
	}

	@Override
	public Tickets addTickets(Tickets ts) {
		// TODO Auto-generated method stub
		
		long tn = ts.getTrainNumber();
		@SuppressWarnings("deprecation")
		Trains tr = tda.getOne(tn);
		
		if(tr.getAvailability() == 0)
			return null;
		else {
			tr.setAvailability(tr.getAvailability()-1);
			tda.save(tr);
		
			ticketD.save(ts);
			return ts;
		}
	}

	

}
