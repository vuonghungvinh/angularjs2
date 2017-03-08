import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Tutorial1Component } from './tutorial1.component';
import { FormsModule} from "@angular/forms";
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Tutorial1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
