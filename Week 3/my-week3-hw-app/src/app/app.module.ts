import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TodoInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
