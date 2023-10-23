import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../models/drinks.interface';
import { TestService } from '../test.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

constructor(private http: HttpClient, public _testService: TestService, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.searchByF().subscribe ((response:any) => {
	    this._testService.drinks = response.drinks
    })
  }

  
}