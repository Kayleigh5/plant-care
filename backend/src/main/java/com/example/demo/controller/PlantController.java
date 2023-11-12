package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Plant;
import com.example.demo.repository.PlantRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class PlantController {

    @Autowired
    PlantRepository plantRepository;

	@GetMapping("/plants")
	public ResponseEntity<List<Plant>> getAllPlants(@RequestParam(required = false) String title) {
		try {
			List<Plant> plants = new ArrayList<Plant>();

			if (title == null)
				plantRepository.findAll().forEach(plants::add);
			else
				plantRepository.findByTitleContainingIgnoreCase(title).forEach(plants::add);

			if (plants.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(plants, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/plants")
	public ResponseEntity<HttpStatus> deleteAllPlants() {
		try {
			plantRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
    
}
