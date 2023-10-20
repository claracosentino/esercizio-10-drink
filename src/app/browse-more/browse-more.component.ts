import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';

@Component({
  selector: 'app-browse-more',
  templateUrl: './browse-more.component.html',
})
export class BrowseMoreComponent implements OnInit {

  alphabet: Array <string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(private http: HttpClient, private _testService: TestService) {}

  ngOnInit(){
    
  }

  changeLetterToSearch(letter: string) {
    this._testService.firstLetter = letter;
     this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this._testService.firstLetter}`).subscribe((response:any) => {
      this._testService.drinks = response.drinks
    })
  }
}
