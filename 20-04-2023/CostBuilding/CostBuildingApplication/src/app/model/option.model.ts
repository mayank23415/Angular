import { Injectable } from "@angular/core";

@Injectable() 
export class Option{
    id: number;
    title: string;
    cost: number;
    selected: boolean;
}