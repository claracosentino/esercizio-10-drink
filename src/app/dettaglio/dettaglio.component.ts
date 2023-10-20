import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../models/drinks.interface';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {

  drinkDetail: Array<Drink> = [];
  /* ingredienti: Array<string> = []; */

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200').subscribe((response:any) => {
      this.drinkDetail = response.drinks;
      
      /* Object.keys(this.drinkDetail[0]).forEach((key)=>{ 
          if(key.startsWith('strIngredient')){
              this.ingredienti.push(this.drinkDetail[0].key);
              console.log(this.ingredienti)
          }
      }) */
      
    })
  }
}
