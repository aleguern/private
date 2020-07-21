import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DumbComponent } from './components/dumb/dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    DumbComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
