import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListarAirplaneComponent } from './listar-airplane/listar-airplane.component';
import { AirplaneService } from 'src/services/airplane.service';
import { AirplaneRouting } from './airplane.routing';
import { MatTableModule, MatDialogModule } from '@angular/material';
import { ManterAirplaneComponent } from './manter-airplane/manter-airplane.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        AirplaneRouting,
        FormsModule,
        MatTableModule,
        MatDialogModule
    ],
    declarations: [
        ListarAirplaneComponent,
        ManterAirplaneComponent
    ],
    entryComponents: [
        ManterAirplaneComponent
    ],
    providers: [
        AirplaneService
    ]
})
export class AirplaneModule { }
