package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Plant;

public interface PlantRepository extends JpaRepository<Plant, Long>{
    List<Plant> findByTitleContainingIgnoreCase(String title);
}
