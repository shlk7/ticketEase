package com.shlok.demo.controller;

public class MyCustomException extends RuntimeException {
	private String message;
    public MyCustomException(String message) {
        super(message);
        this.message = message;
    }
    public MyCustomException() {
    }
}
