package com.shlok.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shlok.demo.entities.Tickets;

public interface TicketDao extends JpaRepository<Tickets,Long> {

}
