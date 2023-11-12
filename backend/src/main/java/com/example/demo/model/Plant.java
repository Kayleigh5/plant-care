package com.example.demo.model;
import jakarta.persistence.*;

@Entity
@Table(name = "plants")
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "tasks")
    private String[] tasks;

    public Plant() {
        
    }

    public Plant(String title, String description, String[] tasks) {
        this.title = title;
        this.description = description;
        this.tasks = tasks;
    }

    public long getId() {
        return id;
      }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String[] getTasks() {
        return tasks;
    }

    public void setTasks(String[] tasks) {
        this.tasks = tasks;
    }
    
    @Override
    public String toString() {
      return "Plant [id=" + id + ", title=" + title + ", desc=" + description + "]";
    }
}