import { Routes, RouterModule } from "@angular/router";
import { ListarAirplaneComponent } from "./listar-airplane/listar-airplane.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ListarAirplaneComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AirplaneRouting { }