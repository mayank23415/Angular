import { Injectable } from "@angular/core";

@Injectable()
export class Option{
    id:number;
    title: string;
    image: string;
    selected: boolean;
    cost: number;
}