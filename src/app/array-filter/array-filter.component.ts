import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-filter',
  templateUrl: './array-filter.component.html',
  styleUrls: ['./array-filter.component.css']
})
export class ArrayFilterComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

  /** Notice that, like map(), every filter() operation shares some operations in common:
   * 1. Traverse the array
   * 2. Add elements that pass the test to a new array
   * Why not abstract away how these operations are carried out?
   * ANS: ARRAY FILTER()
  */
  filterArrayWithoutFilter() {
    const filterededArray = [];
    this.numbers.forEach(item => {
      if (item > 3) {
        filterededArray.push(item + 1);
      }
    });
    return filterededArray;
  }

  /**
   * To make filtering easier,
   * let's add a filter() function to the Array type.
   * The filter() function accepts a predicate.
   * A predicate is a function that accepts an item in the array,
   * and returns a boolean indicating whether the item should be retained
   * in the new array.
   */
  arrayFilter() {
    // defining the filter()
    Array.prototype.filter = function (predicateFunction: any) {
      const results = [];
      this.forEach(function (itemInArray) {
        if (predicateFunction(itemInArray)) {
          results.push(itemInArray);
        }
      });
      return results;
    };
    // use the filter() and pass the predicateFunction (custom/user defined function)
    // Notice that filter allows us to specify what predicate/condition
    // we want to apply to an array, but hides how the operation is carried out.
    const filteredArray = JSON.stringify(
      this.numbers.filter(
        function(x) { return x > 2; }
        // x => x > 2 // arrow function
      )
    );
    console.log(filteredArray);
  }

}
