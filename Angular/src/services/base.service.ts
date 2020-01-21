import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseService {

    protected apiUrl;

    constructor(protected http: HttpClient, rota: string) {
        this.apiUrl = environment.urlApi + rota;


    }

    public handleError(error: any) {
        if (error.status == '401' || error.status == '403') {
            localStorage.clear();
            location.href = "#/login";
        } else {
            return Promise.reject(error);
        }
    }

}
