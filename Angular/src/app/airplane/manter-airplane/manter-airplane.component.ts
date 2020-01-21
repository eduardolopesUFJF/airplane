import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ToastrService } from "ngx-toastr";
import { Airplane } from "src/models/airplane.model";

@Component({
    selector: "app-manter-airplane",
    templateUrl: "./manter-airplane.component.html",
    styleUrls: ["./manter-airplane.component.scss"]
})
export class ManterAirplaneComponent implements OnInit {

    public airplane: Airplane = new Airplane();
    titulo: string = "";
    desabilitar: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<ManterAirplaneComponent>,
        public toastrService: ToastrService,

        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.titulo = data.titulo;
        this.dialogRef.disableClose = true;
        this.desabilitar = data.desabilitar;
        this.airplane = new Airplane(data.airplane);
        this.formatarDataInicio();
    }

    ngOnInit() {

    }

    salvar() {
        this.dialogRef.close(this.airplane);
    }

    fecharModal(): void {
        this.dialogRef.close(false);
    }

    formatarDataInicio() {
        if (this.airplane.dataCriacao) {
            this.airplane.dataCriacao = this.airplane.dataCriacao.toString().split("T")[0];

        } else {
            const hoje = new Date();
            const dia = hoje.getDate().toString();
            const mes = (hoje.getMonth() + 1).toString();
            const ano = hoje.getFullYear().toString();
            this.airplane.dataCriacao = ano + "-" + (mes.length == 1 ? ("0"+mes) : mes) + "-" + (dia.length == 1 ? ("0"+dia) : dia);
        }
    }
}
