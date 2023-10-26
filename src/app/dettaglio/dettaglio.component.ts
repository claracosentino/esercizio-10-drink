import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';
import { ApiService } from '../services/api.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {

  drinkId: number = 0

  constructor(private http: HttpClient, public _testService: TestService, private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.getId()
    this.apiService.getDrinkDetail(this.drinkId).subscribe((response:any) => {
      this._testService.drinkDetail = response.drinks;
    })
  }

  getId(){
    this.drinkId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
