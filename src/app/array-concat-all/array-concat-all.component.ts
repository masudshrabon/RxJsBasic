import { Component, OnInit } from '@angular/core';
import { map, concatAll } from 'rxjs/operators';
import { of, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-array-concat-all',
  templateUrl: './array-concat-all.component.html',
  styleUrls: ['./array-concat-all.component.css']
})
export class ArrayConcatAllComponent implements OnInit {

  twoDnumbers = [[1, 10, 100], [2, 20, 200], [3, 30, 300]];

  constructor() { }

  ngOnInit() {
  }

  arrayConcatManually() {
    const concatedArray = [];
    this.twoDnumbers.forEach(subArray => {
      subArray.forEach(item => {
        concatedArray.push(item);
      });
    });
    console.log(JSON.stringify(concatedArray));
    return concatedArray;
  }

  arrayConcatAll() {


  }

}
