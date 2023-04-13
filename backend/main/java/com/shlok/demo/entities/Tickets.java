package com.shlok.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tickets {
	@Id
	private long pnr;
	private String personName;
	private String personNumber;
	private long trainNumber;
	public Tickets(long pnr, String personName, String personNumber, long trainNumber) {
		super();
		this.pnr = pnr;
		this.personName = personName;
		this.personNumber = personNumber;
		this.trainNumber = trainNumber;
	}
	public Tickets() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getPnr() {
		return pnr;
	}
	public void setPnr(long pnr) {
		this.pnr = pnr;
	}
	public String getPersonName() {
		return personName;
	}
	public void setPersonName(String personName) {
		this.personName = personName;
	}
	public String getPersonNumber() {
		return personNumber;
	}
	public void setPersonNumber(String personNumber) {
		this.personNumber = personNumber;
	}
	public long getTrainNumber() {
		return trainNumber;
	}
	public void setTrainNumber(long trainNumber) {
		this.trainNumber = trainNumber;
	}
	@Override
	public String toString() {
		return "Tckets [pnr=" + pnr + ", personName=" + personName + ", personNumber=" + personNumber + ", trainNumber="
				+ trainNumber + "]";
	}

	
}
