import { Injectable } from "@angular/core";

@Injectable() 
export class Question{
    id:number;
    title: string;
    parentId: number;
    options: [];
    hasMultipleValues: boolean;
    selected: boolean=true;
    image: string;
}