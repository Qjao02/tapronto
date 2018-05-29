import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { Etp1Component } from './etp1/etp1.component';
import { Etp2Component } from './etp2/etp2.component';
// import { RepositoryComponent } from './repository/repository.component';
// import { HeheheComponent } from './hehehe/hehehe.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    Etp1Component,
    Etp2Component
    // RepositoryComponent,
    // HeheheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
