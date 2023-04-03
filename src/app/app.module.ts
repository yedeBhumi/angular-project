import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetbackgroundDirective } from './customBackground/setbackground.directive';
import { RendererSetBackgroundDirective } from './customBackground/renderer-set-background.directive';
import { UseHostPropertyDirective } from './customBackground/use-host-property.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetbackgroundDirective,
    RendererSetBackgroundDirective,
    UseHostPropertyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
