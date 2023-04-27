import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, map } from "rxjs";
import { Data } from "../model/data.model";
import { Question } from "../model/question.model";

@Injectable()
export class DataService{
    getQuestionData(id: any) {
        throw new Error("Method not implemented.");
    }
    constructor(private http: HttpClient) {

    }

    getData(){
        return this.http.get('../../assets/QuestionsOptions.json').pipe(
            map((data:Data[])=>{
                return data.filter(obj=>obj.parentId == null)
            })
        );
    }
    getChildData(id: number){
        console.log(id);
        return this.http.get('../../assets/QuestionsOptions.json').pipe(
            map((data:Question[])=>{
                return data.filter(obj=>obj.parentId == id) ;
            })
        );
    }
}