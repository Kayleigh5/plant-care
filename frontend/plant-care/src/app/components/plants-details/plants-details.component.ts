import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Plant } from '../../models/plant.model';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plants-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './plants-details.component.html',
  styleUrl: './plants-details.component.scss'
})
export class PlantsDetailsComponent {
  @Input() viewMode = false;

  @Input() currentPlant: Plant = {
    title: '',
    description: '',
    tasks: []
  };

  tasksForm = new FormArray<any>([]);

  message = '';

  constructor(
    private plantService: PlantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPlant(this.route.snapshot.params['id']);
    }
  }

  getPlant(id: string): void {
    this.plantService.get(id).subscribe({
      next: (data) => {
        this.currentPlant = data;
        console.log(data);
        this.fillTasks();
      },
      error: (e) => console.error(e)
    });
  }

  updatePlant(): void {
    this.message = '';

    this.currentPlant.tasks = this.tasksForm.value;

    this.plantService
      .update(this.currentPlant.id, this.currentPlant)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This plant was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePlant(): void {
    this.plantService.delete(this.currentPlant.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/plants']);
      },
      error: (e) => console.error(e)
    });
  }

  fillTasks(): void {
    console.log(this.currentPlant.tasks);
    if (this.currentPlant && this.currentPlant.tasks) {
      for (let task of this.currentPlant.tasks) {
        this.tasksForm.push(new FormControl(task));
      }
    }
    
  }

  addTasksForm() {
    this.tasksForm.push(new FormControl(''));
  }

  removeTask(index: number) {
    this.tasksForm.removeAt(index);
  }
}
