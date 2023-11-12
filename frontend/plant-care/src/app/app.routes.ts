import { Routes } from '@angular/router';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';

export const routes: Routes = [
    { path: '', redirectTo: 'plants', pathMatch: 'full' },
    { path: 'plants', component: PlantsListComponent },
    { path: 'add', component: AddPlantComponent }
];
