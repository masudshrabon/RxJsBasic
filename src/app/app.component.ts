import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'RxJsBasic';
  fruits = ['Mango', 'Apple', 'Banana', 'Lichi', 'Orange'];
  numbers = [1, 2, 3, 4, 5];
  ngOnInit(): void {

  }

  basicForLoop() {
    for (let i = 0; i < this.fruits.length; i++) {
      console.log(this.fruits[i]);
    }
  }
  basicForEachLoop() {
    this.fruits.forEach(element => {
      console.log(element);
    });
  }

  /** Applying a function to a value
   * and creating a new value is called a projection.
   */
  projectArray() {
    const projectedArray = [];
    this.numbers.forEach(item => {
      projectedArray.push(item + 1);
    });
  }
  /** All array projections share two operations in common:
   * 1. Traverse the source array
   * 2. Add each item's projected value to a new array
   * Why not abstract away how these operations are carried out?
   * ANS: ARRAY MAP();
   * To make projections easier, let's add a map() function to the Array type.
   * Map accepts the projection function to be applied to each item in the source array,
   * and returns the projected array.
  */
  arrayMap() {
    // defining the map()
    Array.prototype.map = function(projectionFunction: any) {
      const results = [];
      this.forEach(function(itemInArray) {
        results.push(projectionFunction(itemInArray));
      });
      return results;
    };
    // use the map() and pass the projectionFunction (custom/user defined function)
    const projectedArray = JSON.stringify(
      this.numbers.map(
        function(x) { return x * 2; }
        // x => x + 1 // arrow function
      )
    );
    console.log(projectedArray);
  }
}
