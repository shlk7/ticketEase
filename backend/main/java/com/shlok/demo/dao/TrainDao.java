package com.shlok.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shlok.demo.entities.Trains;

public interface TrainDao extends JpaRepository<Trains,Long> {

}
