import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
