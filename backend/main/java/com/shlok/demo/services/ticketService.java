package com.shlok.demo.services;

import java.util.List;

import com.shlok.demo.entities.Tickets;

public interface ticketService {

	List<Tickets> getTickets();

	Tickets getTickets(long tickesId);

	Tickets addTickets(Tickets ts, long userId);
	
	

}
