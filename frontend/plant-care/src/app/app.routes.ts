import { Routes } from '@angular/router';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { PlantsDetailsComponent } from './components/plants-details/plants-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'plants', pathMatch: 'full' },
    { path: 'plants', component: PlantsListComponent },
    { path: 'plants/:id', component: PlantsDetailsComponent },
    { path: 'add', component: AddPlantComponent }
];
