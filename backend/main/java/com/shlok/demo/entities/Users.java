package com.shlok.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String eMaildId;
	private String passwrd;
	private boolean isLoggedIn;
	
	
	
	public Users(String eMaildId, String passwrd, boolean isLoggedIn) {
		super();
		this.eMaildId = eMaildId;
		this.passwrd = passwrd;
		this.isLoggedIn = isLoggedIn;
	}
	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String geteMaildId() {
		return eMaildId;
	}
	public void seteMaildId(String eMaildId) {
		this.eMaildId = eMaildId;
	}
	public String getPasswrd() {
		return passwrd;
	}
	public void setPasswrd(String passwrd) {
		this.passwrd = passwrd;
	}
	public boolean isLoggedIn() {
		return isLoggedIn;
	}
	public void setLoggedIn(boolean isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", eMaildId=" + eMaildId + ", passwrd=" + passwrd + ", isLoggedIn=" + isLoggedIn
				+ "]";
	}
	
	

}
