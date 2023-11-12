import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';
import { PlantsDetailsComponent } from '../plants-details/plants-details.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plants-list',
  standalone: true,
  imports: [CommonModule, PlantsDetailsComponent, FormsModule],
  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent {

  plants?: Plant[];
  currentPlant: Plant = {};
  currentIndex = -1;
  title = '';

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.retrievePlants();
  }
  
  retrievePlants(): void {
    this.plantService.getAll().subscribe({
      next: (data) => {
        this.plants = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrievePlants();
    this.currentPlant = {};
    this.currentIndex = -1;
  }

  setActivePlant(plant: Plant, index: number): void {
    this.currentPlant = plant;
    this.currentIndex = index;
  }

  removeAllPlants(): void {
    this.plantService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentPlant = {};
    this.currentIndex = -1;

    this.plantService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.plants = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
