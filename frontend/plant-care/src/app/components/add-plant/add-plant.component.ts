import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plant } from '../../models/plant.model';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-add-plant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-plant.component.html',
  styleUrl: './add-plant.component.scss'
})
export class AddPlantComponent {
  plant: Plant = {
    title: '',
    description: '',
    tasks: []
  };
  submitted = false;

  constructor(private plantService: PlantService) {}

  savePlant(): void {
    const data = {
      title: this.plant.title,
      description: this.plant.description,
      tasks: this.plant.tasks
    };

    this.plantService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newPlant(): void {
    this.submitted = false;
    this.plant = {
      title: '',
      description: '',
      tasks: []
    };
  }
}
