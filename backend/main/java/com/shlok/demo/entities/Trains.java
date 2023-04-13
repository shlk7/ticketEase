package com.shlok.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
 
@Entity
public class Trains {
	@Id
	private long id;
	private long availability;
	private String name;
	private String fromwhere;
	private String whereto;
	public Trains(long id, long availability, String name, String fromwhere, String whereto) {
		super();
		this.id = id;
		this.availability = availability;
		this.name = name;
		this.fromwhere = fromwhere;
		this.whereto = whereto;
	}
	public Trains() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getAvailability() {
		return availability;
	}
	public void setAvailability(long availability) {
		this.availability = availability;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFromwhere() {
		return fromwhere;
	}
	public void setFromwhere(String fromwhere) {
		this.fromwhere = fromwhere;
	}
	public String getWhereto() {
		return whereto;
	}
	public void setWhereto(String whereto) {
		this.whereto = whereto;
	}
	@Override
	public String toString() {
		return "Trains [id=" + id + ", availability=" + availability + ", name=" + name + ", fromwhere=" + fromwhere
				+ ", whereto=" + whereto + "]";
	}
	
}
