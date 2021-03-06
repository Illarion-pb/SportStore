import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import "rxjs/add/operator/map";

@Injectable()

export class AuthService {
    constructor(private datasource: RestDataSource) {}

    authenticate(username: string, password: string): Observable<boolean> {
        return this.datasource.authenticate(username, password);
    }

    get authenticated(): boolean {
        return this.datasource.auth_tocken != null;
    }

    clear() {
        this.datasource.auth_tocken = null;
    }
}