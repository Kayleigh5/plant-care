import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plant } from '../../models/plant.model';
import { PlantService } from '../../services/plant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plants-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plants-details.component.html',
  styleUrl: './plants-details.component.scss'
})
export class PlantsDetailsComponent {
  @Input() viewMode = false;

  @Input() currentPlant: Plant = {
    title: '',
    description: '',
  };

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
      },
      error: (e) => console.error(e)
    });
  }

  updatePlant(): void {
    this.message = '';

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
}
