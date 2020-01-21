import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Airplane } from 'src/models/airplane.model';

@Injectable({
    providedIn: 'root'
})
export class AirplaneService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'api/airplane');
    }

    public obterTodos() {
        return this.http.get<Airplane[]>(this.apiUrl);
    }

    public obterPorId(id: number) {
        return this.http.get<Airplane>(this.apiUrl + "/" + id);
    }

    public adicionar(airplane: Airplane) {
        return this.http.post<Airplane>(this.apiUrl, airplane);
    }

    public editar(airplane: Airplane) {
        return this.http.put<Airplane>(this.apiUrl, airplane);
    }

    public deletar(id: number) {
        return this.http.delete<any>(this.apiUrl + "/" + id);
    }
}