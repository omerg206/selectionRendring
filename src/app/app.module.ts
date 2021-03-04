import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectionRenderingComponent } from './selection-rendering/selection-rendering.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionRenderingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
