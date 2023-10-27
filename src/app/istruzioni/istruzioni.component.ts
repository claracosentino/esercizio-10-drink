import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-istruzioni',
  templateUrl: './istruzioni.component.html',
})
export class IstruzioniComponent implements OnInit {

  linguaSelezionata: string = 'en'

  constructor(public _testService: TestService) {}

  ngOnInit(): void {
  }

  changeLanguage(lingua: string){
    this.linguaSelezionata = lingua
    console.log('drink detail' + this._testService.drinkDetail)
    console.log('drinks' + this._testService.drinks)
  }
  
}
