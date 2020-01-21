import { OnInit, Component } from "@angular/core";
import { Airplane } from "src/models/airplane.model";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { AirplaneService } from "src/services/airplane.service";
import { ToastrService } from "ngx-toastr";
import { ManterAirplaneComponent } from "../manter-airplane/manter-airplane.component";
import { LoaderService } from "src/app/core/loader/loader.service";

@Component({
    selector: "app-listar-airplane",
    templateUrl: "./listar-airplane.component.html",
    styleUrls: ["./listar-airplane.component.scss"]
})

export class ListarAirplaneComponent implements OnInit {

    airplanes: Airplane[] = [];
    displayedColumns: any[] = [
        "id",
        "codigo",
        "modelo",
        "quantidadePassageiros",
        "dataCriacao",
        "acoes"
    ];
    dataSource = new MatTableDataSource<Airplane>();

    constructor(
        public airplaneService: AirplaneService,
        public toastService: ToastrService,
        public dialog: MatDialog,
        public loader: LoaderService) {

    }

    ngOnInit() {
        this.buscarTodos();
    }

    buscarTodos() {
        this.loader.queue("buscarTodos");
        this.airplaneService.obterTodos().subscribe(
            data => {
                this.dataSource = new MatTableDataSource(data);
                this.loader.dequeue("buscarTodos");
            },
            error => {
                this.loader.dequeue("buscarTodos");
                this.toastService.error(JSON.stringify(error));
            }
        );
    }

    modalCriar() {
        const dialogRef = this.dialog.open(ManterAirplaneComponent, {
            width: '950px',
            data: { titulo: "Novo Avião", desabilitar: false, airplane: new Airplane() }
        });
        dialogRef.afterClosed().subscribe(airplane => {
            if (airplane) {
                this.criar(airplane);
            }
        });
    }

    criar(airplane: Airplane) {
        this.loader.queue("criar");
        this.airplaneService.adicionar(airplane).subscribe(
            data => {
                this.buscarTodos();
                this.loader.dequeue("criar");
            },
            error => {
                this.loader.dequeue("criar");
                this.toastService.error(JSON.stringify(error));
            }
        );
    }

    modalEditar(airplane: Airplane) {
        const dialogRef = this.dialog.open(ManterAirplaneComponent, {
            width: '950px',
            data: { titulo: "Editar Avião", desabilitar: false, airplane: airplane }
        });
        dialogRef.afterClosed().subscribe(airplane => {
            if (airplane) {
                this.editar(airplane);
            }
        });
    }

    editar(airplane: Airplane) {
        this.loader.queue("editar");
        this.airplaneService.editar(airplane).subscribe(
            data => {
                this.buscarTodos();
                this.loader.dequeue("editar");
            },
            error => {
                this.loader.dequeue("editar");
                this.toastService.error(JSON.stringify(error));
            }
        );
    }

    modalConsultar(airplane: Airplane) {
        const dialogRef = this.dialog.open(ManterAirplaneComponent, {
            width: '950px',
            data: { titulo: "Consultar Avião", desabilitar: true, airplane: airplane }
        });
    }

    excluir(airplaneId: number) {
        this.loader.queue("excluir");
        this.airplaneService.deletar(airplaneId).subscribe(
            data => {
                this.buscarTodos();
                this.loader.dequeue("excluir");
            },
            error => {
                this.loader.dequeue("excluir");
                this.toastService.error(JSON.stringify(error));
            }
        );
    }

    exibirFooterGrid() {
        return this.dataSource.data.length === 0;
    }
}