import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
  TodoListHeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }