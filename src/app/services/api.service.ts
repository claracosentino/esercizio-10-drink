import { Injectable } from '@angular/core';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient, public _testService: TestService) {}

    searchByF(firstLetter: string){
        return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    }

}
