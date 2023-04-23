import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class Data{
    id:number;
    title: string;
    parentId: number;
    options: [];
    hasMultipleValues: boolean;
    selected: boolean=true;
    image: string;
}