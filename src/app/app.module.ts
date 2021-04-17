import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChangeStyleDirective } from './change-style.directive';
import { AbracadabraDirective } from './abracadabra.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChangeStyleDirective,
    AbracadabraDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
