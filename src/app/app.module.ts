import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
const moduleImports = [BrowserModule, BrowserAnimationsModule, AppRoutingModule];

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
const materialImports = [MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [...moduleImports, ...materialImports],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
