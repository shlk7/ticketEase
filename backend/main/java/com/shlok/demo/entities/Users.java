package com.shlok.demo.entities;

import javax.validation.constraints.Email;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Email
	private String email;
	private String password;
	private boolean isLoggedIn;
	private boolean isAdmin;
	public Users(long id, @Email String email, String password, boolean isLoggedIn, boolean isAdmin) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.isLoggedIn = isLoggedIn;
		this.isAdmin = isAdmin;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isLoggedIn() {
		return isLoggedIn;
	}
	public void setLoggedIn(boolean isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
	}
	public boolean isAdmin() {
		return isAdmin;
	}
	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", email=" + email + ", password=" + password + ", isLoggedIn=" + isLoggedIn
				+ ", isAdmin=" + isAdmin + "]";
	}
	
	
	

}
