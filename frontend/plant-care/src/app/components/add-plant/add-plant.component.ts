import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Plant } from '../../models/plant.model';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-add-plant',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  tasksForm = new FormArray<any>([]);

  error = '';

  constructor(private plantService: PlantService) {}

  ngOnInit():void {
    this.addTasksForm();
  }

  savePlant(): void {
    const data = {
      title: this.plant.title,
      description: this.plant.description,
      tasks: this.tasksForm.value
    };

    this.plantService.create(data).subscribe({
      next: (res) => {
        this.error = '';
        console.log(res);
        this.submitted = true;
      },
      error: (e) => {
        this.error = 'Unable to save plant...';
        console.error(e);
      }
    });
  }

  newPlant(): void {
    this.submitted = false;
    this.plant = {
      title: '',
      description: '',
      tasks: []
    };
    this.tasksForm = new FormArray<any>([]);
  }

  addTasksForm() {
    this.tasksForm.push(new FormControl(''));
  }

  removeTask(index: number) {
    this.tasksForm.removeAt(index);
  }
}
