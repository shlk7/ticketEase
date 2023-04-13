package com.shlok.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shlok.demo.entities.Tickets;
import com.shlok.demo.entities.Trains;
import com.shlok.demo.services.ticketService;
import com.shlok.demo.services.trainServices;

@RestController
public class MyController {
	
	@Autowired
	private trainServices ts;
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/trains")
	public List<Trains> getTrains() {
		return this.ts.getTrains();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("trains/{trainId}")
	public Trains getTrain(@PathVariable long trainId) {
		System.out.print(trainId);
		return this.ts.getTrain(trainId);
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addingTrain")
	public Trains addTrain(@RequestBody Trains tr) {
		return this.ts.addTrain(tr);
	}
	
	
	// tickets routes
	
	@Autowired
	private ticketService ticketSer;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/tickets")
	public List<Tickets> getTickets() {
		return this.ticketSer.getTickets();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("tickets/{tickesId}")
	public Tickets getTickets(@PathVariable long tickesId) {
//		System.out.print(tickesId);
		return this.ticketSer.getTickets(tickesId);
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addTicket")
	public Tickets addTickets(@RequestBody Tickets ts) {
		return this.ticketSer.addTickets(ts);
	}

}
