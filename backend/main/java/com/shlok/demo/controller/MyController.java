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
import com.shlok.demo.entities.Users;
import com.shlok.demo.services.ticketService;
import com.shlok.demo.services.trainServices;
import com.shlok.demo.services.userService;

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
	@PostMapping("/addingTrain/{userId}")
	public Trains addTrain(@RequestBody Trains tr, @PathVariable long userId) {
		return this.ts.addTrain(tr,userId);
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
	@PostMapping("/addTicket/{userId}")
	public Tickets addTickets(@RequestBody Tickets ts, @PathVariable long userId) {
		System.out.print(userId);
		return this.ticketSer.addTickets(ts, userId);
	}
	
	
	// user routes
	
	@Autowired
	private userService user;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/user")
	public List<Users> getUsers() {
		return this.user.getUsers();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/user/{uId}")
	public Users getUser(@PathVariable long uId) {
		return this.user.getUser(uId);
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addUser")
	public Users addUser(@RequestBody Users us) {
		System.out.println(us);
		us.setLoggedIn(false);
		us.setAdmin(false);
		return this.user.addUser(us);
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/user/login")
	public Users findByEmail(@RequestBody Users us) {
		return this.user.findByEmail(us);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/logout/{userId}")
	public Users logout(@PathVariable long userId) {
		return this.user.logout(userId);
	}

}
