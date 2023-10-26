import { Injectable } from '@angular/core';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient, public _testService: TestService) {}

    searchByF(){
        return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this._testService.firstLetter}`)
    }

    getDrinkDetail(idDrink:number){
      return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    }

}
