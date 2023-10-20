import { Injectable } from "@angular/core";
import {Drink} from "./models/drinks.interface"

@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor (){}

    public drinks:Array<Drink> = []
    public firstLetter: string = 'a';
}