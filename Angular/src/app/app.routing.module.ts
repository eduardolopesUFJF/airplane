import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './airplane/airplane.module#AirplaneModule' }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
