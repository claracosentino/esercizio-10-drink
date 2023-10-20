import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../models/drinks.interface';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

constructor(private http: HttpClient, public _testService: TestService) {}

  ngOnInit() {
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this._testService.firstLetter}`).subscribe((response:any) => {
      this._testService.drinks = response.drinks
    })
  }

  
}