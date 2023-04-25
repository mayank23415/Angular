import { Injectable } from "@angular/core";

@Injectable() 
export class Menu{
    id:number;
    title: string;
    options: [];
    hasMultipleValues: boolean;
    selected: boolean=true;
    image: string;
}