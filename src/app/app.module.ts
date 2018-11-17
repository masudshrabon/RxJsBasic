import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrayFilterComponent } from './array-filter/array-filter.component';
import { ArrayConcatAllComponent } from './array-concat-all/array-concat-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFilterComponent,
    ArrayConcatAllComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
