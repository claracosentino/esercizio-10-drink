import { Injectable } from '@angular/core';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient, public _testService: TestService, private activatedRoute: ActivatedRoute) {}

    lettera:string | null = 'a'

    getLettera(){
      this.lettera = this.activatedRoute.snapshot.paramMap.get('letter');
    }

    searchByF(lettera:string | null){
        this.getLettera()
        return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${lettera}`)
    }

    getDrinkDetail(idDrink:number){
      return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    }

}
