import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostdisplayComponent } from './postdisplay/postdisplay.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    PostdisplayComponent,
    UserdisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
