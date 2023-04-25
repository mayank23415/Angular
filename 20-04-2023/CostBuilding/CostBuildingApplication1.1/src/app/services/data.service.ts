import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, map } from "rxjs";
import { Data } from "../model/data.model";

@Injectable()
export class DataService{
    constructor(private http: HttpClient) {

    }

    getData(){
        return this.http.get('../../assets/QuestionsOptions.json');
    }
}