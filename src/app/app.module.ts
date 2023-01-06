import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationbarSimpleComponent } from "./navigationbar-simple/navigationbar-simple.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule, MatIconModule, BrowserAnimationsModule, MatButtonModule ],
  declarations: [ AppComponent, HelloComponent, NavigationbarSimpleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
