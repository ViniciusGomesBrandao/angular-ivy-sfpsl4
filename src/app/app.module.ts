import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Demo1Component} from './demo1/demo1.component';
import {Demo2Component} from './demo2/demo2.component';
import {Demo3Component} from './demo3/demo3.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Demo1Component, Demo2Component, Demo3Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
