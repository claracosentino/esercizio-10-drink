import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  filtroDrink:string = 'tutti'

  constructor(public _testService: TestService, private apiService: ApiService, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.apiService.searchByF(this.activatedRoute.snapshot.paramMap.get('letter')).subscribe ((response:any) => {
	    this._testService.drinks = response.drinks
    })
  }

  impostaFiltro(filtro:string){
    switch (filtro) {
      case 'ordinary-drink':
        this.filtroDrink = 'Ordinary Drink'
        break;
      case 'cocktail':
        this.filtroDrink = 'Cocktail'
        break;
      case 'shake':
        this.filtroDrink = 'Shake'
        break;
      case 'other-unknown':
        this.filtroDrink = 'Other / Unknown'
        break;
      case 'cocoa':
        this.filtroDrink = 'Cocoa'
        break;
      case 'shot':
        this.filtroDrink = 'Shot'
        break;
      case 'coffee-tea':
        this.filtroDrink = 'Coffee / Tea'
        break;
      case 'homemade-liqueur':
        this.filtroDrink = 'Homemade Liqueur'
        break;
      case 'punch-party-drink':
        this.filtroDrink = 'Punch / Party Drink'
        break;
      case 'beer':
        this.filtroDrink = 'Beer'
        break;
      case 'soft-drink':
        this.filtroDrink = 'Soft Drink'
        break;
      case 'tutti':
        this.filtroDrink = 'tutti'
        break;
    }
  }
}