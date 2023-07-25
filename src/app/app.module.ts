import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { miprimercomponente } from './components/mi-primer-componente/mi-primer-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    miprimercomponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
