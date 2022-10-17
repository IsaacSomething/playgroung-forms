import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
const moduleImports = [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LayoutModule];

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
const materialImports = [MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [...moduleImports, ...materialImports],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
